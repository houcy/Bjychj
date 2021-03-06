package com.bjychj.c.activity

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import com.bjychj.c.R
import com.bjychj.c.contract.RetrieveContract
import com.bjychj.c.presenter.RetrievePresenter
import com.bjychj.c.utils.CountTimer
import com.bjychj.c.utils.LoadingDialog
import com.bjychj.c.utils.ToastUtil
import kotlinx.android.synthetic.main.activity_retrieve.*

class RetrieveActivity : AppCompatActivity(), RetrieveContract.View {
    private lateinit var mPresenter: RetrieveContract.Presenter
    private var code = ""
    private var mCountTimer: CountTimer? = null
    private lateinit var loadingDialog: LoadingDialog
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_retrieve)
        loadingDialog = LoadingDialog(this@RetrieveActivity, R.style.MyDialog)

        RetrievePresenter(this, this)
        mCountTimer = CountTimer(60000, 1000, btnCode)

        btnCode.setOnClickListener {
            when {
                TextUtils.isEmpty(etPhone.text.toString()) -> ToastUtil().showToastShort(
                        this@RetrieveActivity,
                        "请输入手机号"
                )
                etPhone.text.toString().length != 11 -> ToastUtil().showToastShort(this@RetrieveActivity, "请输入正确手机号")
                else -> {
                    mCountTimer!!.start()
                    mPresenter.getCode(etPhone.text.toString())
                }
            }
        }

        btnNext.setOnClickListener {
            when {
                TextUtils.isEmpty(etPhone.text.toString()) -> ToastUtil().showToastShort(
                        this@RetrieveActivity,
                        "请输入手机号"
                )
                etPhone.text.toString().length != 11 -> ToastUtil().showToastShort(this@RetrieveActivity, "请输入正确手机号")
                TextUtils.isEmpty(etCode.text.toString()) -> ToastUtil().showToastShort(
                        this@RetrieveActivity,
                        "请输入验证码"
                )

//                TextUtils.equals(code, etCode.text.toString()) -> ToastUtil().showToastShort(
//                    this@RetrieveActivity,
//                    "验证码有误"
//                )

                TextUtils.isEmpty(etPwd.text.toString()) -> ToastUtil().showToastShort(
                        this@RetrieveActivity,
                        "请输入密码"
                )

                else -> {
                    mPresenter.doRetrieve(etPhone.text.toString(), etPwd.text.toString(), etCode.text.toString())
                }
            }
        }

        llBack.setOnClickListener {
            finish()
        }


    }

    override fun onDestroy() {
        super.onDestroy()
        mCountTimer!!.cancel()
    }

    override fun setPresenter(presenter: RetrieveContract.Presenter) {
        mPresenter = presenter
    }

    override fun showToast(msg: String) {
        ToastUtil().showToastShort(this@RetrieveActivity, msg)
    }

    override fun initCode(code: String) {
        this.code = code
    }

    override fun retrieveSuccess() {
        ToastUtil().showToastShort(this@RetrieveActivity, "密码设置成功")
        finish()
    }

    override fun showLoadingDialog() {
        loadingDialog.show()
    }

    override fun hideLoadingDialog() {
        loadingDialog.dismiss()
    }

}
