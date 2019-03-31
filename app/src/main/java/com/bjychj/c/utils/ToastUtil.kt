package com.bjychj.c.utils

import android.content.Context
import android.widget.Toast

/**
 * Create by yangyanjing on 2019/3/31 0031.
 *@description:
 */
class ToastUtil {
    fun showToastShort(context: Context, msg: String) {
        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show()
    }

    fun showToastLong(context: Context, msg: String) {
        Toast.makeText(context, msg, Toast.LENGTH_LONG).show()
    }
}