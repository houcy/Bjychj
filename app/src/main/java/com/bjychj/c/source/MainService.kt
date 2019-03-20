package com.bjychj.c.source

import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.POST
import rx.Observable


interface MainService {

    //登录
    @FormUrlEncoded
    @POST("")

   fun getMainServer(@Field("loginName") loginName:Any?) : Observable<LoginBean>


}