import request from "./request"

// 查询渲染列表
export function queryByPage(data) {
  return request({
    url: '/system/user/queryByPage',
    method: 'post',
    data: data || {}
  })
}

//新增用户
export  function addUser(data) {
  return request({
    url: '/system/user',
    method: 'post',
    data: data || {}
  })
}

//删除用户
export  function deletUser(id) {
  return request({
    url: `/system/user/delete/${id}`,
    method: 'delete',
  })
}

//批量删除
export  function deleteUsers(data) {
  return request({
    url: '/system/user/deleteBatch',
    method: 'delete',
    data: data || {}
  })
}

//修改用户
export function updateUser(data) {
  return request({
    url: `/system/user/update/${data.id}`,
    method: 'put',
    data: data || {}
  })
}

//查询用户信息
export function userInfo(userId) {
  return request({
    url: `/system/menu/getMenuTreeByRoleId?roleId=101`,
    method: 'get'
  })
}

//角色分配
export function roleAssign(userId,roelId) {
  return request({
    url: `/system/user/roleAssign?userId=`+userId+`&roleId=`+roelId,
    method: 'get'
  })
}

//重置密码
export function resetPass(userId,roelId) {
  return request({
    url: `/system/user/resetPass?userId=`+userId,
    method: 'get'
  })
}
