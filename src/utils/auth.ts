/*
 * @Author: Fone丶峰
 * @Date: 2020-05-29 15:07:43
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-06-01 15:37:39
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import * as cookie from "js-cookie";

/**
 * 
 * @param name 
 * @param value 
 */
export function setToken(name: string, value: any) {
    cookie.set(name, value);
}

/**
 * 
 * @param name 
 */
export function getToken(name: string) {
    return cookie.get(name);
}

/**
 * 
 * @param name 
 */
export function removeToken(name: string) {
    cookie.remove(name);
}