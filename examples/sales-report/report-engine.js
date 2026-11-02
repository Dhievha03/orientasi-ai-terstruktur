window.TEFA_SALES_REPORT = {
  rows(orders,period){return orders.filter(order=>order.date===period)},
  summarize(orders,period,stage='final'){
    const rows=this.rows(orders,period);
    const included=stage==='before'?rows:stage==='first'?rows.filter(order=>order.status!=='cancelled'):rows.filter(order=>order.status==='completed');
    return {total:included.reduce((sum,order)=>sum+order.amount,0),count:included.length,ids:included.map(order=>order.id)};
  },
  exportRows(orders,period,stage='final'){
    const summary=this.summarize(orders,period,stage);
    return this.rows(orders,period).filter(order=>summary.ids.includes(order.id));
  },
  money(amount){return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(amount)}
};
