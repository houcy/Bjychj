package com.bjychj.c.utils

import android.app.Dialog
import android.content.Context
import com.bjychj.c.R

/**
 * Create by yangyanjing on 2019/4/10 0010.
 *@description:
 */
class LoadingDialog(context: Context, themeResId: Int) : Dialog(context, themeResId) {
    init {
        setContentView(R.layout.layout_loading_dialog)
        setCanceledOnTouchOutside(false)
    }


}
