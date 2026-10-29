/* Material air orisinal. Semua pola dihitung dari koordinat, tanpa tekstur/gambar. */
(() => {
  'use strict';

  const canvas = document.getElementById('water-surface');
  let gl;
  try {
    gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
      preserveDrawingBuffer: true
    });
  } catch { gl = null; }

  // Canvas 2D tetap menganimasikan air ketika akselerasi WebGL tidak tersedia.
  function startCanvasWater() {
    const surface = canvas.cloneNode(false);
    surface.hidden = false;
    canvas.replaceWith(surface);
    const ctx = surface.getContext('2d', { alpha: false });
    if (!ctx) { surface.hidden = true; return; }
    let moving = false;
    let fullMoon = false;
    let clean = false;
    let pulse = 0;
    let elapsed = 0;
    let previous = 0;
    let frame;
    const random = (seed) => { const value = Math.sin(seed*127.1)*43758.5453; return value-Math.floor(value); };
    const patches = Array.from({length: 34}, (_,i) => ({
      x: random(i+1), y: random(i+46)*0.39,
      width: 0.045+random(i+81)*0.09,
      height: 0.008+random(i+121)*0.017,
      seed: random(i+161)*Math.PI*2
    }));

    function draw() {
      const w = surface.width;
      const h = surface.height;
      const base = ctx.createLinearGradient(0,0,0,h);
      base.addColorStop(0,fullMoon ? '#03bdce' : '#09e4ed');
      base.addColorStop(0.17,fullMoon ? '#0454a9' : '#087ddc');
      base.addColorStop(0.48,fullMoon ? '#07258a' : '#053bc8');
      base.addColorStop(1,fullMoon ? '#061365' : '#0511a7');
      ctx.fillStyle = base;
      ctx.fillRect(0,0,w,h);
      const t = elapsed*0.65;
      patches.forEach((patch) => {
        const x = (patch.x+Math.sin(t*0.40+patch.seed)*0.025)*w;
        const y = (patch.y+Math.cos(t*0.60+patch.seed)*0.012)*h;
        const radiusX = patch.width*w*(1+Math.sin(t*0.8+patch.seed)*0.16);
        const radiusY = patch.height*h*(1+Math.cos(t+patch.seed)*0.24+pulse*0.4);
        const points = Array.from({length:12},(_,i) => {
          const a = i/12*Math.PI*2;
          const warp = 1+0.27*Math.sin(a*3+t+patch.seed);
          return [x+Math.cos(a)*radiusX*warp,y+Math.sin(a)*radiusY*warp];
        });
        ctx.beginPath();
        ctx.moveTo((points[11][0]+points[0][0])/2,(points[11][1]+points[0][1])/2);
        points.forEach((p,i) => {
          const next = points[(i+1)%points.length];
          ctx.quadraticCurveTo(p[0],p[1],(p[0]+next[0])/2,(p[1]+next[1])/2);
        });
        ctx.closePath();
        ctx.fillStyle = `rgba(75,255,247,${(0.25*(1-patch.y/0.43)).toFixed(3)})`;
        ctx.fill();
      });
      const veil = ctx.createLinearGradient(0,0,w,0);
      veil.addColorStop(0,clean ? 'rgba(0,9,62,.16)' : 'rgba(0,9,62,0)');
      veil.addColorStop(0.6,'rgba(0,9,62,.20)');
      veil.addColorStop(1,'rgba(0,9,62,.20)');
      ctx.fillStyle = veil;
      ctx.fillRect(0,0,w,h);
    }

    function resize() {
      const scale = Math.min(0.8,1120/innerWidth);
      surface.width = Math.max(1,Math.round(innerWidth*scale));
      surface.height = Math.max(1,Math.round(innerHeight*scale));
      draw();
    }
    function animate(now) {
      if (!moving || document.hidden) return;
      if (now-previous >= 1000/30) {
        if (previous) elapsed += Math.min((now-previous)/1000,0.25);
        previous = now;
        draw();
      }
      frame = requestAnimationFrame(animate);
    }
    function setMotion(value) {
      moving = value;
      cancelAnimationFrame(frame);
      previous = 0;
      if (moving && !document.hidden) frame = requestAnimationFrame(animate);
      else { pulse = 0; draw(); }
    }
    window.addEventListener('resize',resize);
    document.addEventListener('visibilitychange',() => setMotion(moving));
    resize();
    window.TEFA_WATER = {
      renderer: 'canvas', setMotion,
      setFullMoon(value) { fullMoon = value; draw(); },
      setClean(value) { clean = value; draw(); },
      setTransition(value) { pulse = moving ? value : 0; }
    };
  }

  if (!gl) { startCanvasWater(); return; }

  const vertexSource = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `;

  const fragmentSource = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
    uniform vec2 resolution;
    uniform float elapsed;
    uniform float fullMoon;
    uniform float clean;
    uniform float pulse;

    float hash(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx)*0.1031);
      p3 += dot(p3,p3.yzx+33.33);
      return fract((p3.x+p3.y)*p3.z);
    }

    float noise(vec2 p) {
      vec2 cell = floor(p);
      vec2 f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(hash(cell),hash(cell+vec2(1.0,0.0)),u.x),
                 mix(hash(cell+vec2(0.0,1.0)),hash(cell+vec2(1.0)),u.x),u.y);
    }

    float fbm(vec2 p) {
      float result = 0.0;
      float weight = 0.56;
      mat2 turn = mat2(0.80,-0.60,0.60,0.80);
      for (int i=0; i<3; i++) {
        result += weight*noise(p);
        p = turn*p*2.08+vec2(7.2,3.8);
        weight *= 0.47;
      }
      return result;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy/resolution;
      float aspect = resolution.x/resolution.y;
      vec2 delta = (uv-vec2(0.64,0.50))*vec2(aspect,1.0);
      float ripple = sin(length(delta)*26.0-elapsed*2.1)*exp(-length(delta)*2.2)*pulse;
      uv += normalize(delta+vec2(0.001))*ripple*0.014;
      float depth = 1.0-uv.y;
      float t = elapsed*0.28;

      // Biru dasar beralih halus ke cyan yang terkumpul di dekat permukaan.
      vec3 deep = vec3(0.004,0.025,0.82);
      vec3 middle = vec3(0.012,0.25,0.82);
      vec3 shallow = vec3(0.015,0.85,0.91);
      float surfaceLight = exp(-depth*7.0);
      float upperBlue = exp(-depth*2.4);
      vec3 color = mix(deep,middle,upperBlue);
      color = mix(color,shallow,surfaceLight*0.94);

      // Domain warping mengubah kontur setiap sel menjadi pantulan air yang organik.
      vec2 p = vec2(uv.x*6.0*aspect, depth*22.0);
      p.x += 0.4*sin(depth*12.0+t*0.75);
      p.y += 0.55*sin(uv.x*8.0-t*0.55);
      vec2 warp = vec2(
        fbm(p*0.31+vec2(t*0.45,-t*0.3)),
        fbm(p*0.29+vec2(4.6,-t*0.5))
      );
      float surface = fbm(p+warp*2.3+vec2(t*0.3,t*0.45));
      float islands = smoothstep(0.43,0.51,surface);
      float softEdge = smoothstep(0.355,0.43,surface)-smoothstep(0.43,0.48,surface);
      float lightFalloff = exp(-depth*4.5);
      float reflection = (islands*0.72+softEdge*0.50)*lightFalloff;
      color += vec3(0.015,0.40,0.30)*reflection;

      // Lapisan lebih besar memberi kesan kedalaman, tanpa garis pita atau batas panel.
      vec2 flow = vec2(uv.x*3.3*aspect,depth*5.0);
      float current = fbm(flow+vec2(t*0.17,-t*0.2)+warp*0.6);
      float shadow = smoothstep(0.35,0.65,current);
      color *= 0.86+shadow*0.16;
      color += vec3(0.0,0.035,0.07)*current*(1.0-depth);

      // Wash sangat lembut menjaga teks putih di area materi tetap kontras.
      float reading = mix(smoothstep(0.25,0.54,uv.x),1.0,clean);
      float readingWash = reading*(0.18+surfaceLight*0.34)*smoothstep(0.015,0.10,depth);
      color *= 1.0-readingWash;
      color *= mix(vec3(1.0),vec3(0.70,0.65,0.72),fullMoon*0.65);
      color = clamp(color,0.0,1.0);
      gl_FragColor = vec4(color,1.0);
    }
  `;

  let program;
  let locations;
  let frame;
  let moving = false;
  let fullMoon = false;
  let clean = false;
  let pulse = 0;
  let lost = false;
  let elapsed = 0;
  let previousFrame = 0;

  function compile(kind, source) {
    const shader = gl.createShader(kind);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function initialize() {
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertex || !fragment) { canvas.hidden = true; return false; }
    program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { canvas.hidden = true; return false; }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    locations = Object.fromEntries(['resolution','elapsed','fullMoon','clean','pulse'].map((name) => [name,gl.getUniformLocation(program,name)]));
    canvas.hidden = false;
    return true;
  }

  function resize() {
    // Resolusi dibatasi agar materi dan interaksi tetap ringan di laptop/proyektor.
    const scale = Math.min(0.7, 1280/window.innerWidth);
    canvas.width = Math.max(1, Math.round(window.innerWidth*scale));
    canvas.height = Math.max(1, Math.round(window.innerHeight*scale));
    if (!lost && program) { gl.viewport(0,0,canvas.width,canvas.height); draw(); }
  }

  function draw() {
    if (lost || !program || canvas.hidden) return;
    gl.uniform2f(locations.resolution,canvas.width,canvas.height);
    gl.uniform1f(locations.elapsed,elapsed);
    gl.uniform1f(locations.fullMoon,fullMoon ? 1 : 0);
    gl.uniform1f(locations.clean,clean ? 1 : 0);
    gl.uniform1f(locations.pulse,pulse);
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
  }

  function animate(now) {
    if (!moving || lost || document.hidden) return;
    if (now-previousFrame >= 1000/30) {
      if (previousFrame) elapsed += Math.min((now-previousFrame)/1000,0.25);
      previousFrame = now;
      draw();
    }
    frame = requestAnimationFrame(animate);
  }

  function setMotion(enabled) {
    moving = enabled;
    cancelAnimationFrame(frame);
    previousFrame = 0;
    if (moving && !document.hidden && !lost) frame = requestAnimationFrame(animate);
    else { pulse = 0; draw(); }
  }

  if (!initialize()) { startCanvasWater(); return; }
  resize();
  window.addEventListener('resize',resize);
  document.addEventListener('visibilitychange',() => setMotion(moving));
  canvas.addEventListener('webglcontextlost',(event) => {
    event.preventDefault();
    lost = true;
    canvas.hidden = true;
    cancelAnimationFrame(frame);
  });
  canvas.addEventListener('webglcontextrestored',() => {
    lost = false;
    if (initialize()) { resize(); setMotion(moving); }
  });

  window.TEFA_WATER = {
    renderer: 'webgl', setMotion,
    setFullMoon(value) { if (fullMoon !== value) { fullMoon = value; draw(); } },
    setClean(value) { if (clean !== value) { clean = value; draw(); } },
    setTransition(value) { pulse = moving ? value : 0; }
  };
})();
