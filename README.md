# stock

##介绍
管理股票投资，因为投资了美股、港股，想知道总体收益有多少时，总是很抓狂，所以想一款app来提供单一货币结算计算的投资收益率。

数据库设计

入金表(s_deposit)：id,currency,quantity,createdate
现金表(s_cash)：id,currency,quantity,createdate
现金交易记录表(s_cash_transaction_record)：id,currency,amount，transaction_time
股票表(s_stock) id，code，name，holding
股票交易记录表(s_stock_transaction_record) id,code,amount,transaction_type,transaction_time
结算表(s_settlement)：id,currency
股票交易类型表(s_stock_transaction_type)id,type,note
现金交易类型表(s_cash_transaction_type)id,type,note
货币类型表(s_currency_type)id,currency,code
