Page({
    onLoad: function () {

    },
    eportrait: function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            success: function (res) {
                wx.navigateTo({ url: '/pages/imgcut/imgcut?imgpage=' + res.tempFilePaths[0] });
            }
        });
    },
    eportrait1: function () {
        wx.navigateTo({ url: '/pages/imgcut/imgcut' });
    },
    eimgcutcb: function (newimg) {
        this.setData({
            newimg: newimg
        });
    }
})
