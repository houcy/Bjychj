package com.bjychj.c.activity

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import com.bjychj.c.R
import com.bjychj.c.contract.RegisterContract
import com.bjychj.c.presenter.RegisterPresenter
import com.bjychj.c.utils.ToastUtil
import kotlinx.android.synthetic.main.activity_register.*

class RegisterActivity : AppCompatActivity(), RegisterContract.View {
    private lateinit var presenter: RegisterContract.Presenter
    private var code: String = ""
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        RegisterPresenter(this, this)

        btnCode.setOnClickListener {
            when {
                TextUtils.isEmpty(etPhone.text.toString()) -> ToastUtil().showToastShort(
                    this@RegisterActivity,
                    "请输入手机号"
                )
                etPhone.text.toString().length != 11 -> ToastUtil().showToastShort(this@RegisterActivity, "请输入正确手机号")
                else -> presenter.getCode(etPhone.text.toString())
            }
        }

        btnNext.setOnClickListener {
            when {
                TextUtils.isEmpty(etPhone.text.toString()) -> ToastUtil().showToastShort(
                    this@RegisterActivity,
                    "请输入手机号"
                )
                etPhone.text.toString().length != 11 -> ToastUtil().showToastShort(this@RegisterActivity, "请输入正确手机号")
                TextUtils.isEmpty(etName.text.toString()) -> ToastUtil().showToastShort(
                    this@RegisterActivity,
                    "请输入姓名"
                )
                TextUtils.isEmpty(etCode.text.toString()) -> ToastUtil().showToastShort(
                    this@RegisterActivity,
                    "请输入验证码"
                )
                TextUtils.isEmpty(etPwd.text.toString()) -> ToastUtil().showToastShort(
                    this@RegisterActivity,
                    "请输入密码"
                )
//                TextUtils.equals(code, etCode.text.toString()) -> ToastUtil().showToastShort(
//                    this@RegisterActivity,
//                    "验证码有误"
//                )

                else -> {
                    presenter.doRegister(
                        etPhone.text.toString(),
                        etPwd.text.toString(),
                        etName.text.toString(),
                        "0",
                        etCode.text.toString()
                    )  //todo  schoolId 无输入地方
                }
            }
        }

        llBack.setOnClickListener {
            finish()
        }

    }

    override fun setPresenter(presenter: RegisterContract.Presenter) {
        this.presenter = presenter
    }

    override fun showToast(msg: String) {
        ToastUtil().showToastShort(this@RegisterActivity, msg)
    }

    override fun initCode(code: String) {
        this.code = code
    }

    override fun registerSuccess() {
        ToastUtil().showToastShort(this@RegisterActivity,"注册成功")
        finish()
    }
}
