## How to get code ? line notify
- เข้าไปที่ https://notify-bot.line.me/th/
- เลือกการจัดการบริการที่ละทะเบียน 
- ลงทะเบียนบริการ และใส่ข้อมูลให้ครบถ้วน *ถ้ากำลังdevด้วย localhost ให้ใส่ Callback URL เป็น http://localhost:4200/
- ลงทะเบียนบริการเสร็จจะได้ **Client ID** และ **Client Secret**

## Function อะไรบ้าง สำหรับ get code ?
**Typescript Home**
ต้องการ **Client ID** และ **Client Secret** จากการลงทะเบียน เพื่อส่งไป Get Token จาก Server

```html
  getNotify() {
    let data: any = {
      client_id: 'UxOzoFBdQrzhSghQdQTelG',
      redirect_uri: 'https://line-notify-front.herokuapp.com/home'
    }
    ...
  }
```