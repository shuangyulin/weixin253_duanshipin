const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论","审核","上传","展现"],"menu":"上传视频","menuJump":"列表","tableName":"shangchuanshipin"}],"menu":"上传视频管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"懂球视频","menuJump":"列表","tableName":"dongqiushipin"}],"menu":"懂球视频管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"分享视频","menuJump":"列表","tableName":"fenxiangshipin"}],"menu":"分享视频管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"收藏视频","menuJump":"列表","tableName":"shouzangshipin"}],"menu":"收藏视频管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"上传视频列表","menuJump":"列表","tableName":"shangchuanshipin"}],"menu":"上传视频模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["分享","查看评论","新增","查看","修改","收藏","删除"],"menu":"上传视频","menuJump":"列表","tableName":"shangchuanshipin"}],"menu":"上传视频管理"},{"child":[{"buttons":["查看","分享","收藏"],"menu":"懂球视频","menuJump":"列表","tableName":"dongqiushipin"}],"menu":"懂球视频管理"},{"child":[{"buttons":["查看","删除"],"menu":"分享视频","menuJump":"列表","tableName":"fenxiangshipin"}],"menu":"分享视频管理"},{"child":[{"buttons":["查看","删除"],"menu":"收藏视频","menuJump":"列表","tableName":"shouzangshipin"}],"menu":"收藏视频管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"上传视频列表","menuJump":"列表","tableName":"shangchuanshipin"}],"menu":"上传视频模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
