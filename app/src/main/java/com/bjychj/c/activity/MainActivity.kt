package com.bjychj.c.activity

import android.content.Context
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.KeyEvent
import android.webkit.JavascriptInterface
import android.webkit.WebView
import com.bjychj.c.utils.ToastUtil
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    var mWebView: WebView? = null
    private var mExitTime: Long = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(com.bjychj.c.R.layout.activity_main)

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


        //控制电机
        //控制类型type1,单控，2、联动; 单控port1,value1可以穿任意值，联动port1,value1必传
        // port1,联动时的输入端口,value1 联动时的输入阀值
        //port2,联动时的控制设备端口，dir电机方向 0\1、
        // speed转速0-100、min分钟数0-59\255 255表示一直转、s秒钟数 0-59，ms毫秒数0-999
        @JavascriptInterface
        fun controlMotor(type: Int, port1: Int, value1: Int, port2: Int, dir: String, speed: Int, min: Int, s: Int, ms: Int) {


        }


        //控制智能彩灯
        //控制类型type1,单控，2、联动; 单控port1,value1可以穿任意值，联动port1,value1必传
        // port1,联动时的输入端口,value1 联动时的输入阀值
        //port2,联动时的控制设备端口，颜色light 10/20/30/40/50/60/70/80   红/橙/黄/绿/青/蓝/紫 /关灯
        // min分钟数0-59\255 255表示一直转、s秒钟数 0-59，ms毫秒数0-999

        @JavascriptInterface
        fun controlLight(type: Int, port1: Int, value1: Int, port2: Int, lights: String, min: Int, s: Int, ms: Int) {


        }


        //控制智能彩灯
        //控制类型type1,单控，2、联动; 单控port1,value1可以穿任意值，联动port1,value1必传
        // port1,联动时的输入端口,value1 联动时的输入阀值
        //port2,联动时的控制设备端口，电压值voltage 0-100
        // min分钟数0-59\255 255表示一直转、s秒钟数 0-59，ms毫秒数0-999

        @JavascriptInterface
        fun controlLampCmd(type: Int, port1: Int, value1: Int, port2: Int, voltage: Int) {


        }


        //蓝牙改名字
        @JavascriptInterface
        fun modifyName(blueToothName: String) {


        }

        //升级固件
        @JavascriptInterface
        fun updateBlue() {


        }

    }
}
