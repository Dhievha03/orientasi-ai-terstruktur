(() => {
  'use strict';
  const data=window.TEFA_SALES_DATA,report=window.TEFA_SALES_REPORT;
  const labels={before:'VERSI AWAL',first:'PERBAIKAN PARSIAL',final:'HASIL KOREKSI'};
  const requested=new URLSearchParams(location.search).get('stage'),stage=Object.hasOwn(labels,requested)?requested:'final';
  const period=document.querySelector('#period');
  document.querySelector('#stage-label').textContent=labels[stage];
  document.querySelector(`nav a[href="?stage=${stage}"]`).setAttribute('aria-current','page');
  function render(){
    const summary=report.summarize(data.orders,period.value,stage),rows=report.rows(data.orders,period.value);
    document.querySelector('#revenue').textContent=report.money(summary.total);
    document.querySelector('#included-count').textContent=summary.count;
    document.querySelector('#orders').replaceChildren(...rows.map(order=>{
      const row=document.createElement('tr');row.dataset.order=order.id;
      for(const value of [order.id,order.status,report.money(order.amount),summary.ids.includes(order.id)?'Ya':'Tidak']){const cell=document.createElement('td');cell.textContent=value;row.append(cell)}
      return row;
    }));
    document.querySelector('#empty').hidden=rows.length>0;
    document.querySelector('#export-status').textContent='';
  }
  period.addEventListener('change',render);
  document.querySelector('#export').addEventListener('click',()=>{
    const rows=report.exportRows(data.orders,period.value,stage);
    const csv=['id,date,status,amount',...rows.map(row=>[row.id,row.date,row.status,row.amount].join(','))].join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download=`penjualan-${period.value}.csv`;link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    document.querySelector('#export-status').textContent=`${rows.length} transaksi diekspor. Total ${report.money(rows.reduce((sum,row)=>sum+row.amount,0))}.`;
  });
  render();
})();
