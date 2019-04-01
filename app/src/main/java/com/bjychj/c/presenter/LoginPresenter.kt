package com.bjychj.c.presenter

import android.content.Context
import com.bjychj.c.constants.Constants
import com.bjychj.c.contract.LoginContract
import com.bjychj.c.source.UsualBean
import com.bjychj.c.source.MainService
import com.bjychj.c.usual.NetWorkUtils
import rx.Subscriber
import rx.android.schedulers.AndroidSchedulers
import rx.schedulers.Schedulers

/**
 * Create by yangyanjing on 2019/3/31 0031.
 *@description:
 */
class LoginPresenter constructor(context: Context, view: LoginContract.View) : LoginContract.Presenter {
    private val context = context
    private val view = view
    private lateinit var service: MainService

    init {
        view.setPresenter(this)
        initService()
    }

    private fun initService() {
        service = NetWorkUtils.getMainService()
    }

    override fun doLogin(account: String, password: String) {
        val observable = service.getMainServer(account, password)
        observable.subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(object : Subscriber<UsualBean>() {
                    override fun onNext(t: UsualBean?) {
                        val code = t!!.returnCode

                        when (code) {
                            Constants.ReturnSuccess -> view.loginSuccess()
                            "1001" -> view.showToast("用户名或密码错误")
                            "1002" -> view.showToast("账号已关闭")
                            else -> {
                                view.showToast("输入错误")
                            }
                        }
                    }

                    override fun onCompleted() {

                    }

                    override fun onError(e: Throwable?) {
                        view.showToast("请求错误,请稍后重试")
                    }

                })


    }

}