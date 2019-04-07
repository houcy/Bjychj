package com.bjychj.c.activity

import android.content.Context
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import com.bjychj.c.R
import com.bjychj.c.utils.ToastUtil
import kotlinx.android.synthetic.main.activity_js_test.*


class JsTestActivity : AppCompatActivity() {
    public var mWebView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_js_test)
        mWebView = webView

        val webSettings = mWebView!!.settings
        //设置与js调用的权限
        webSettings.javaScriptEnabled = true
        //载入js代码
        mWebView!!.loadUrl("file:///android_asset/javascript.html")

        //调用js
        btnTest.setOnClickListener {
            webView.post {
                mWebView!!.loadUrl("javascript:show('" + "android调用js" + "')")
            }
        }

        //js调用Android
        mWebView!!.addJavascriptInterface(JsHook(this@JsTestActivity), "hello")


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
