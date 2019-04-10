package com.bjychj.c.activity

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.text.TextUtils
import android.view.KeyEvent
import com.bjychj.c.R
import com.bjychj.c.contract.LoginContract
import com.bjychj.c.presenter.LoginPresenter
import com.bjychj.c.utils.LoadingDialog
import com.bjychj.c.utils.ToastUtil
import kotlinx.android.synthetic.main.activity_login.*

class LoginActivity : AppCompatActivity(), LoginContract.View {
    private var presenter: LoginContract.Presenter? = null
    private var mExitTime: Long = 0
    private lateinit var loadingDialog: LoadingDialog
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        LoginPresenter(this, this)

        loadingDialog = LoadingDialog(this@LoginActivity, R.style.MyDialog)

        //注册
        tvRegister.setOnClickListener {
            val intent = Intent()
            intent.setClass(this@LoginActivity, RegisterActivity::class.java)
            startActivity(intent)
        }

        //忘记密码
        tvForgetPwd.setOnClickListener {
            val intent = Intent()
            intent.setClass(this@LoginActivity, RetrieveActivity::class.java)
            startActivity(intent)
        }

        btnLogin.setOnClickListener {
            if (TextUtils.isEmpty(etAccount.text.toString()) || TextUtils.isEmpty(etPwd.text.toString())) {
                ToastUtil().showToastShort(this@LoginActivity, "请输入账号或密码")
            } else {
                presenter!!.doLogin(etAccount.text.toString(), etPwd.text.toString())
            }
        }
    }

    override fun setPresenter(presenter: LoginContract.Presenter) {
        this.presenter = presenter
    }

    override fun showToast(msg: String) {
        ToastUtil().showToastShort(this@LoginActivity, msg)
    }

    override fun loginSuccess() {
        val intent = Intent()
        intent.setClass(this@LoginActivity, MainActivity::class.java)
        startActivity(intent)
        finish()
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (System.currentTimeMillis() - mExitTime > 2000) {
                ToastUtil().showToastShort(this@LoginActivity, "再按一次退出程序")
                mExitTime = System.currentTimeMillis()
            } else {
                finish()
            }
            return true
        }
        return super.onKeyDown(keyCode, event)
    }

    override fun showLoadingDialog() {
      loadingDialog.show()
    }

    override fun hideLoadingDialog() {
       loadingDialog.dismiss()
    }
}
