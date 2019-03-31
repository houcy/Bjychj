package com.bjychj.c.activity

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import com.bjychj.c.R
import com.bjychj.c.contract.LoginContract
import com.bjychj.c.presenter.LoginPresenter
import com.bjychj.c.utils.ToastUtil
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), LoginContract.View {
    private var presenter: LoginContract.Presenter? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        LoginPresenter(this, this)

        //注册
        tvRegister.setOnClickListener {
            val intent = Intent()
            intent.setClass(this@MainActivity, RegisterActivity::class.java)
            startActivity(intent)
        }

        //忘记密码
        tvForgetPwd.setOnClickListener {
            val intent = Intent()
            intent.setClass(this@MainActivity, RetrieveActivity::class.java)
            startActivity(intent)
        }

        btnLogin.setOnClickListener {
            if (TextUtils.isEmpty(etAccount.text.toString()) || TextUtils.isEmpty(etPwd.text.toString())) {
                ToastUtil().showToastShort(this@MainActivity, "请输入账号或密码")
            } else {
                presenter!!.doLogin(etAccount.text.toString(),etPwd.text.toString())
            }
        }
    }

    override fun setPresenter(presenter: LoginContract.Presenter) {
        this.presenter = presenter
    }

    override fun showToast(msg: String) {
        ToastUtil().showToastShort(this@MainActivity, msg)
    }

    override fun loginSuccess() {
        //todo  登录成功
    }
}
