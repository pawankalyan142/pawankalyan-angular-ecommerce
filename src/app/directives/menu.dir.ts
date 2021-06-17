import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-print-none">
      <a class="navbar-brand" href="#" routerLink="/products"
        ><img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEhUQExEQEhIVEBUQFhUREBIQFxUQFxEWFxUSExUYICohGBolGxUTITEhJSorLi4uFx83ODMtNygtLisBCgoKDg0OGxAQGDYmICI3Li0tKzU3LS0tLS00Ny8tKy0vNTYtLS0vLS4tKysuLS0tLS03LS04LS0tLTYrKys3Lf/AABEIAMkA+wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAD4QAAICAQIEAwQHBgMJAAAAAAABAgMRBBIFBiExEyJRB0FhcRQyUoGRobEjYnKiwdEIQvAVFlNjgpOjs+L/xAAbAQEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAC0RAQACAQIDBgUFAQAAAAAAAAABAgMEEQUSUQYTMUFhwTNxgZHwISNCseEU/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGMmWfDkl6GJH1kZPLx4faj+KPUxW0W8JZmNkXxrjlelSTTlZJeWEV1fXH3LJG/wC8epXWWhtUcZ6Zf9ByzX9Jss1s+uZuupPrtgvev9epZcH0w0OEcZp1Sbg2pL60JLEo/NEhkrvM1Co262tbZ1zSntWN9cnhxljuT8JppNdmk18mJH3kZPnd8j53L1WfmGN4eoCAZAAAAAAAAAAAAAAAAAAAAAAAAAAAK/zM/qL+J/oWArfMz88F+6/1IrjNttJb6NnRxvmj6oaPR5966kjzRx+/TRpnWq3CxNPfGT821Ndmvdn8COPfjtXjcPb7yqmpL5J4f8smRHZ7NtmnHPnG/wCfdLXpSctJvG8b7fdocP5s1m1+FpaXCHWXhwmlFPr9ozH2g3++mp/KUkV3h/F7tPCddcko2LEsxT92Mr7jRSLjywlI4bgm1ubHG3l4rq+dbLYS3aNTrX1nubivTc3HBL8ucz/TJTh4XhqNblndleiWMFE0fGbaabNPFR2WZy2uqysPH3E57P8Ao9RL0pX9Rywj9foMOLT5L8m23h+s+CE1GonJtuc35n3lJ9NzJbkuSWqj8Yyj+SIJf2JTlme3VVfGePxiyy6ikdxaIjycb0uSf+ml5nzj+3VUACquggAAAAAAAAAAAAAAAAAAAAAAAAAAMq/Mkv2q+EF+rLOyq8febn8IpfkQvHrbaX6w3ND8VHEnwaKsjbQ+063+jT/VEYbfCbtlsX6vb9z6f2Kzw/N3Wppb12Smeu+OdnPHBxbi+6e1/NZT/QEtzZpfC1dscdJS8RfKXX9ckSdHhYcOTvKRfrESFs5N8un1k/SrH8s3/YqZbeWunD9ZL1bj/wCOK/qfVY3tEesIrtDbl4fkn0V1G3wqe2+l+l1f4b1n8jV/1+RmEsNP0af4PJaLxvWYcJxzteJ9YdnQPmt5SfwPopzpMTvAAAyAAAAAAAAAAAAAAAAAAAAAAAAwyo8ZebpfNL8kW5lO4nLNs/4iB7QTtgrHr7S3+Hx+5M+jVCeOq79/vAKhvsl2t7Q6U5U6hdp17H815l+sioF+47X43D2/fVNP5LOH+Uigo6Xo8ve4K36xDe4XffDyT/GZj39wt3COnCr363Y/OtFRLfT5eEr969/+z/5N3D8SvzhH9qr8vDr/AJ5SrjMAFpcNdg4fZuqrfrXF/wAqNki+XJ7tNS/+Wv0JNFNyRteYdJw25sdZ6xDIAPl6gAAAAAAAAAAAAAAAAAAAAAAAMMpOslmyf8cv1ZdmVW/hN+5vanmTfSS97IDj2LJkpSKVmW9ob1raZtKOTBsy4fcu9cvwyeUqJrvCS/6WVa2DJXxrKVjJSfCW9wqCshdQ+063+jT+/sc2lBxbi+6eH810/odC4Vbstjnpl7fx6frgqXNWl8LV2x9zl4i+Uln9cly7P5ubTck/xn/Wxw6/LnvTrET7IkuGqW3hdC+1PP5yZTy58Zi1oNJFJvon0Wf8rZZNN8avzR/bG23Dpjqq4PaGlsfaux/KEn/Q+48Pvfam3/tyLJz16uMxjvPlLoXJc86Sv4OS/CbJ1Fe5Jqshp3GcZRatlhSTXlaTz+LZYSqamI7623WXQNDMzpse/SGQAeDbAAAAAAAAAAAAAAAAAAAAAAFP569oej4Ooxt32XTW6NVeM7c43Tb6RX5sqOh9uNasjHVaG/T1yflnlz6facWk2u3bIHSOP8yaTh6hLU3RqVk/Di5Z6yxnrjsl6ktk4h/iE1leo0mguqmp12TtnCceqcXXDDN7U+3Svc3ToNRbRF+axy24jnvhJpdPVoDsJhorfJnOuk4vW7KJNThhWVT6Tg32bXvT9UafPPtF0XCMQs3W3yW5U1Y3KOcbpt9Ir82YmBbXBP3IheNcr0auxWTc01Hb5WllZz1yvic/0HtvrU4x1Wh1Gnrn9WazPy/acXFNrt2ydU0WurvrhdVONlU47ozi8px9UxWIr4PTHmvjtzUnaUFXyRo13VkvnY/6E/p9NGuMYRXlilFL4JdDnHMvtk0unuem01FmstjJxbr6Q3J+ZReG5Yx3Swe3KXte0mtuWlvqs0l8ntirHmEpvtDdhOLfu3JZPreWcufJm/TJaZ+boyifSNLi3FadHVPUXzjXVBZlJ56fBJdW2+iS6tnLNT7coyk3p+H6i6mL81jltws98RTx09WjDxiHYQVbkjnzR8Xi/BcoWxSc6bFicYvtJe6Ufiv7Gvydz9VxHVarR+FKm3TTaSnJNzrjPZKePdiWMr95BlcQVb2g86VcG06vnB2TnYq4VqW3c8Zk8+5JL80WHh+p8aqFu2UN9cZ7Zd47op4fx6gbAAAAAAAAAAAAAAAAAAAGGZMMDkftN5O4hLX1cW0VdWolXCKdNiUsThnDUJdJLze5ppoitX7TqLovQ8a4XOtSwm4xaa69LFCeJLDT6xb7dMlm9o3DON1aqviPDrZ2whWoT0u5uPR5bVbeJ59/+bp0Kjx3ifMPHa/oMuFOiEpRlKyyi2nG2SllWXfVWUvq5eMr3gfPtrq0sOG8NjpMfRk7HVtba2OEXnL6t5bznrnJ2ng3BdPo6IaaquEa4RUcbV5njrKXq33ZyP2k8i6uHDOHaLT12aqVE5wm64N4lZh7mvdDc5dX26ZO25A4jotLDh3NcaNOvDpvrbnXHpHEtNKbil6b4KR8+zXR18R45xDVapKyym2brhZiW39vKEWk/sRgor0yic4nwDVy5oo1aosemVG53bXsjjT2QcZS7KW5rp36mpzpyZxDQ66XF+ErdOxylbSkm3KXWbUX9eMmstd0+wHSeaeB6bW6W2i+EXB1yw2lmElF4nB/5Wn1OMcgcZvq5e4ltm/2MnGtrpt8WMVJx+9uX3m1xLj/ADNxit6GPDpaSFi2WzlTdQnXLpJOdvaOM5Sy8ZLDxvlSHCeXNVpk1Obr8S2aWN9jshnC9ySSS+XxA2fYXwTT08OhqYxhK65yc54TklGbSrT9yWO3qzQ9v3BdO9GtaoqGprurhGyKUZShJvyya6tJ9V6dfUpfIet49wvTQv02llrNHfmxQjCd+2abi3iHmg+i+BMy4HxvmW6t66l6LRVSUnCUJ1N/a2wm98pNdNzwlnoB4e1Hituq0HB6rJ7Y6muq62WcLc4QjvkvRb5P7ztnBuD6fSUw09NUIVwiopJLr8Zerfdt+pxz2/6DM+HaatKOVKiC7JZcIRXwXYzo+auaOHQWknw2zVOEVCFvgXXeVdFmyp7ZfN4fqBnmHRV8N5o0b0qVS1CrlbCHSObbLa7PL2w1FSx69fQ+ufYvgnHNPxWK20any3bV78KNvT4rbP5pkr7PeSddbrHxninTUZbrqeG4vbtUpJdIpRbSj7s57om/bdw6m7hVs7JKEqZRurk/+KntUPjuUpL78+4Cm8xy/wBvcw06SL3aXRrdPHVPa1O3DX2n4cPufodwijk3+HzlzwNJZrZp79TJRhldqIN4a/ik5P5KJ1oAAAAAAAAAAAAAAAAAAAAAAw0GjIA8abo2RU4yUotZUovKa+DPQoPDtJqdNp9NbTZqZ3WRurddkpOtZ099lK8J+WvbKuuKlhZT6t5NTUazZWpafVcQnP6Fqp2+NK2UY3R0rlGVm9YqsUn0gsR79OiA6S2Yyc6WtkoxlptRrbJPRXT1Pjzuara0zlXPE8KqzxHBJRxmOenTJsaSt3ShXpdZr3KzSzV8rZXPwbHWnVa42L9lbvf1IpJpvKwkBfskBzxw36do7dErIV2aiDrr3vCc4+fHx6Qb+SZ5cp6y/VKzV2qdSeNPGlyzGLpclbYl2blY5pP3xhD1wV7R0T1E6a/G1UlHiEnK+Nl+ZReivzGO9ZofXbJReE30abwgs/I/BJcP0NGknKM51wxKUc7XJybeM+7r3J1Molts65Qp1N+shpI26qCtVtsJuUZ1+DC66Hn27JWYefNtWW2a8Na3OmGq1Gvqpem1Ek4yspcoR1O2iy+dfmjJ17cds56rPQDb9ofJVvE79FdCyFa09++amnlw3Rl5Md3mOMPHf7i6LUw3urct6gpuOeqg20pY9Mxa+459RrJSlTDV6nX11PTXTTjK3TuUVqnGieolXiULHU4tLpu656rBlWa66NcXZq61P6MlPEq7Hp3xC5brFhbbJUKG7p0z1A6JuKX7UeUb+MaerT1XwqUdQrJ702pR2uKax3cdz6dnk+NRXbXKenndrvokdWs2Kds7VVLSwmoeMv2nh+K5Zkm2vqtqPaT5KulOWrj4l9tcNUoVPUb3NV/R6njz9cZk8N9Wmn1yBOcK0NemprorWK6q41xX7sUks/E2wAAAAAAAAAAAAAAAAAAAAAAAAAMYPPVURthKucVKE4yhKL7OEk00/ubPUAa9ulhKDqcU63Dw3F9tmMY/A9oxSSXuSx+R9ADW0GjrohGquKhXCKhGKWFGK7JGyAAPD6PHf4u3z7Nm737d2cfie4A8Fpob/F2re4bN3v2Jt4/Fs9kZAGlxLhlWoSVkW9st8JRlKE4T2uO6E4tOLw2sp9mz64bw+vTx8OuO2OXN5bk5Tk8ynOTeZSb7t9zbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"
          class="logo mr-2"
        /><h3 style="color:orange">Happy Shoppy</h3></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/products"
              >Products <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/billing">Billing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/checkout">Checkout</a>
          </li>
        </ul>
      </div>
    </nav>
  `,

  styles: [
    `
      .logo {
        height: 60px;
        width: auto;
      }
    `
  ]
})
export class MenuDir {}
