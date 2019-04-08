package com.bjychj.c.utils

import android.os.CountDownTimer
import android.widget.Button

class CountTimer(millisInFuture: Long, countDownInterval: Long, button: Button) :
    CountDownTimer(millisInFuture, countDownInterval) {
    private var mButton = button
    override fun onFinish() {
        mButton.isClickable = true
        mButton.text = "获取验证码"
    }

    override fun onTick(millisUntilFinished: Long) {
        var stringBuffer = StringBuffer()
        val time = millisUntilFinished / 1000
        stringBuffer.append(time)
        stringBuffer.append("S后重新发送")
        mButton.text = stringBuffer
        mButton.isClickable = false

    }
}
