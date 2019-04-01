package com.bjychj.c.presenter

import android.content.Context
import android.text.TextUtils
import com.bjychj.c.constants.Constants
import com.bjychj.c.contract.RegisterContract
import com.bjychj.c.source.CodeBean
import com.bjychj.c.source.RegisterService
import com.bjychj.c.source.UsualBean
import com.bjychj.c.usual.NetWorkUtils
import rx.Scheduler
import rx.Subscriber
import rx.android.schedulers.AndroidSchedulers
import rx.schedulers.Schedulers

/**
 * Create by yangyanjing on 2019/3/31 0031.
 *@description:
 */
class RegisterPresenter constructor(context: Context, view: RegisterContract.View) : RegisterContract.Presenter {


    private val mContext = context
    private val mView = view
    private lateinit var mService: RegisterService

    init {
        mView.setPresenter(this)
        initService()
    }

    private fun initService() {
        mService = NetWorkUtils.getRegisterService()
    }


    override fun getCode(account: String) {
        val observable = mService.getCode(account)
        observable.subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(object : Subscriber<CodeBean>(){
                override fun onNext(t: CodeBean?) {
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
                    mView.showToast("请求错误,请稍后重试")
                }

            })
    }

    override fun doRegister(account: String, password: String, name: String, schoolId: String, code: String) {
        val observable = mService.getRegister(account, password, name, schoolId, code)
        observable.observeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(object :Subscriber<UsualBean>(){
                override fun onNext(t: UsualBean?) {
                    val returnCode = t!!.returnCode
                    when (returnCode) {
                        Constants.ReturnSuccess -> mView.registerSuccess()
                        "1003" -> mView.showToast("账号已存在")
                        "1004" -> mView.showToast("学校ID不正确")
                        "1006" -> mView.showToast("验证码错误")
                        else ->{
                            mView.showToast("输入错误")
                        }
                    }
                }

                override fun onCompleted() {

                }

                override fun onError(e: Throwable?) {
                    mView.showToast("请求错误,请稍后重试")
                }

            })
    }
}