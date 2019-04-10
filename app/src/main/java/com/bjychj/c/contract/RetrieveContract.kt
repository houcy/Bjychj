package com.bjychj.c.contract

/**
 * Create by yangyanjing on 2019/4/1 0001.
 *@description:
 */
interface RetrieveContract {

    interface Presenter {
        fun getCode(account: String)
        fun doRetrieve(account:String,newPwd:String,code:String)

    }

    interface View {
        fun setPresenter(presenter: RetrieveContract.Presenter)
        fun showToast(msg: String)
        fun initCode(code: String)
        fun retrieveSuccess()
        fun showLoadingDialog()
        fun hideLoadingDialog()
    }
}