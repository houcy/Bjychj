package com.bjychj.c.contract

/**
 * Create by yangyanjing on 2019/3/31 0031.
 *@description:
 */
interface RegisterContract {
    interface Presenter {
        fun getCode(account: String)
        fun doRegister(account: String, password: String, name: String, schoolId: String, code: String)
    }

    interface View {
        fun setPresenter(presenter: RegisterContract.Presenter)
        fun showToast(msg: String)
        fun initCode(code: String)
        fun registerSuccess()
        fun showLoadingDialog()
        fun hideLoadingDialog()
    }
}