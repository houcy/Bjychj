package com.bjychj.c.source

import retrofit2.http.*
import rx.Observable

/**
 * Create by yangyanjing on 2019/4/1 0001.
 *@description:
 */
interface RetrieveService {
    @GET("rest/user/getCode")
    fun getCode(@Query("account") account: String): Observable<CodeBean>

    @FormUrlEncoded
    @POST("rest/user/resetPassword")
    fun doRetrieve(@Field("account") account: String, @Field("password")newPwd: String,@Field("code") code: String): Observable<UsualBean>
}