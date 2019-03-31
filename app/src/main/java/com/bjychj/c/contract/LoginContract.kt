package com.bjychj.c.contract

/**
 * Create by yangyanjing on 2019/3/31 0031.
 *@description:
 */
interface LoginContract {
    interface Presenter {
        fun doLogin(account: String, password: String)
    }

    interface View {
        fun setPresenter(presenter: LoginContract.Presenter)
        fun showToast(msg:String)
        fun loginSuccess()
    }
}