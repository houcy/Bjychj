package com.bjychj.c.usual

import com.bjychj.c.constants.Constants
import com.bjychj.c.source.MainService
import retrofit2.Retrofit
import retrofit2.adapter.rxjava.RxJavaCallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory

class NetWorkUtils {

    private var mainService: MainService? = null
    fun getMainService(): MainService {
        if (null == mainService) {
            val retrofit = Retrofit.Builder()
                .baseUrl(Constants.BaseUrl)
                .addConverterFactory(GsonConverterFactory.create())
                .addCallAdapterFactory(RxJavaCallAdapterFactory.create())
                .build()
            mainService = retrofit.create(MainService::class.java)

        }
        return mainService!!
    }

}