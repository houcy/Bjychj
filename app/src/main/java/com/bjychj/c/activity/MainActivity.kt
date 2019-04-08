package com.bjychj.c.activity

import android.content.Context
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.KeyEvent
import android.webkit.JavascriptInterface
import android.webkit.WebView
import com.bjychj.c.R
import com.bjychj.c.utils.ToastUtil
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    var mWebView: WebView? = null
    private var mExitTime: Long = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mWebView = webView

        val webSettings = mWebView!!.settings
        //设置与js调用的权限
        webSettings.javaScriptEnabled = true
        //载入js代码
        mWebView!!.loadUrl("file:///android_asset/newjs/ficube/index.html")


        //js调用Android
        mWebView!!.addJavascriptInterface(JsHook(this@MainActivity), "hello")


    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (System.currentTimeMillis() - mExitTime > 2000) {
                ToastUtil().showToastShort(this@MainActivity, "再按一次退出程序")
                mExitTime = System.currentTimeMillis()
            } else {
                finish()
            }
            return true
        }
        return super.onKeyDown(keyCode, event)
    }

    inner class JsHook(context: Context) {

        private val context = context
        @JavascriptInterface
        fun showFromJs(msg: String) {
            mWebView!!.post {

                mWebView!!.loadUrl("javascript:show('" + "js调用Android" + "')")
            }

        }

    }
}
