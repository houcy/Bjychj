package com.bjychj.c.source

import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.POST
import rx.Observable


interface MainService {

    //登录
    @FormUrlEncoded
    @POST("user/login")
    fun getMainServer(@Field("account") account: String, @Field("password") password: String): Observable<LoginBean>


}