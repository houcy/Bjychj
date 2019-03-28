package com.bjychj.c.activity

import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import com.bjychj.c.R
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //注册
        tvRegister.setOnClickListener {
            val intent = Intent()
            intent.setClass(this@MainActivity, RegisterActivity::class.java)
            startActivity(intent)
        }
    }
}
