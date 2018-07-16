export default function Hi(call, cb) {
    cb(null, { msg: call.request.msg })
}