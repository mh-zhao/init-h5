/**
 * 文字超过N位截取 显示...
 * @param val (|)管道符左侧默认传入的参数
 * @param {Number} num 要截取字符长度 默认16
 */
export function interceptCharacterLen(val, num = 16) {
  if (!val) return "";
  if (val.length > num) return val.substring(0, num) + "...";
  return val;
}

/**
 *
 * @param {status} status 订单状态
 */
export function initStatus(status) {
  switch (status) {
    case "-1":
      return "为删除状态";
    case "1":
      return "订单生成";
    case "2":
      return "完成";
    case "3":
      return "订单取消";
    case "4":
      return "已冲正";
    case "5":
      return "已退款";
    case "6":
      return "超时";
    // case '7':
    //   return '退款拒绝'
    case "8":
      return "退款拒绝";
    case "9":
      return "退款申请";
    case "10":
      return "业务失败";
    case "11":
      return "处理中";
    case "12":
      return "已赠送";
    case "13":
      return "已退回";
    case "14":
      return "已收到";
    case "15":
      return "使用正常";
    case "16":
      return "使用失败";
    case "17":
      return "退款失败";
    case "18":
      return "待发货";
    case "19":
      return "待收货";
    case "20":
      return "申请退货退款";
    case "21":
      return "退货退款成功";
    case "22":
      return "退货退款拒绝";
    case "23":
      return "退货退款中";
    case "24":
      return "售后";
    default:
      return "订单异常";
  }
}
