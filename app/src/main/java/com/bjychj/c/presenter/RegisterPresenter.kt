package com.bjychj.c.presenter

import android.content.Context
import com.bjychj.c.contract.RegisterContract
import com.bjychj.c.usual.NetWorkUtils

/**
 * Create by yangyanjing on 2019/3/31 0031.
 *@description:
 */
class RegisterPresenter constructor(context: Context,view: RegisterContract.View) : RegisterContract.Presenter {
    private val mContext = context
    private val mView = view

    init {
        mView.setPresenter(this)
        initService()
    }

    private fun initService() {
        NetWorkUtils.getRegisterService()
    }


    override fun getCode(account: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}