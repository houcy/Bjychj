package com.bjychj.c.presenter

import android.content.Context
import com.bjychj.c.constants.Constants
import com.bjychj.c.contract.RetrieveContract
import com.bjychj.c.source.CodeBean
import com.bjychj.c.source.RetrieveService
import com.bjychj.c.source.UsualBean
import com.bjychj.c.usual.NetWorkUtils
import rx.Subscriber
import rx.android.schedulers.AndroidSchedulers
import rx.schedulers.Schedulers

/**
 * Create by yangyanjing on 2019/4/1 0001.
 *@description:
 */
class RetrievePresenter constructor(context: Context, view: RetrieveContract.View) : RetrieveContract.Presenter {


    private val mContext = context
    private val mView = view
    private lateinit var mService: RetrieveService

    init {
        mView.setPresenter(this)
        initService()
    }

    private fun initService() {
        mService = NetWorkUtils.getRetrieveService()
    }


    override fun getCode(account: String) {
        mView.showLoadingDialog()
        val observable = mService.getCode(account)
        observable.subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(object : Subscriber<CodeBean>(){
                override fun onNext(t: CodeBean?) {
                    mView.hideLoadingDialog()
                    val code = t!!.returnCode
                    when (code) {
                        Constants.ReturnSuccess -> mView.initCode(t.code)
                        "0002" -> mView.showToast("手机号错误")
                        "1005" -> mView.showToast("账号不存在")
                        else -> {
                            mView.showToast("输入错误")
                        }
                    }

                }

                override fun onCompleted() {

                }

                override fun onError(e: Throwable?) {
                    mView.hideLoadingDialog()
                    mView.showToast("请求错误,请稍后重试")
                }

            })
    }

    override fun doRetrieve(account: String, newPwd: String, code: String) {
        mView.showLoadingDialog()
        val observable = mService.doRetrieve(account, newPwd, code)
        observable.subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(object : Subscriber<UsualBean>(){
                override fun onNext(t: UsualBean?) {
                    mView.hideLoadingDialog()
                    val returnCode = t!!.returnCode
                    when (returnCode) {
                        Constants.ReturnSuccess -> mView.retrieveSuccess()
                        "1006" -> mView.showToast("验证码错误")
                        "1007" -> mView.showToast("验证码已过期")
                        else ->{
                            mView.showToast("输入错误")
                        }
                    }
                }

                override fun onCompleted() {

                }

                override fun onError(e: Throwable?) {
                    mView.hideLoadingDialog()
                    mView.showToast("请求错误,请稍后重试")
                }

            })
    }

}