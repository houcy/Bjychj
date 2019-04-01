package com.bjychj.c.source

import retrofit2.http.*
import rx.Observable

/**
 * Create by yangyanjing on 2019/3/31 0031.
 *@description:
 */
interface RegisterService {
    //注册
    @FormUrlEncoded
    @POST("user/register")
    fun getRegister(
        @Field("account") account: String, @Field("password") password: String, @Field("name") name: String
        , @Field("schoolId") schoolId: String, @Field("code") code: String
    ): Observable<UsualBean>

    @GET("rest/user/getCode")
    fun getCode(@Query("account") account: String): Observable<CodeBean>
}