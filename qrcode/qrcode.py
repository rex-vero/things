import qrcode
# add your link here
img = qrcode.make('https://rex-vero.github.io/nasa/')
# save your photo as
img.save('qrcode.png')
img.show() 