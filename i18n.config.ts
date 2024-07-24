
export default defineI18nConfig(() => ({
    legacy: false,
    messages: {
        'id-ID': {
            app: {
                home: "Beranda",
                about: "Tentang",
                back: "kembali",
                or: 'ATAU'
            },
            home: {
                headline: "Tindakan kita sekarang",
                headline1: 'pastikan bahagia mendatang',
                sub: "Jadwalkan konsultasi kesehatan anda sekarang",
                contact: "Hubungi kami",
                benefit: {
                    title: "Penanganan kesehatan lengkap",
                    body: "Dilayani oleh professional dan peralatan memadai untuk solusi kesehatan menyeluruh",
                    poin1: "Dilayani oleh banyak tenaga spesialis yang ahli di berbagai bidang kesehatan",
                    poin2: "Dilengkapi laboratorium untuk analisa mendalam terhadap suatu penyakit",
                    poin3: "Radiologi untuk pencitraan organ tubuh manusia untuk mencari anomali dalam tubuh"
                }
            },
            welcome: 'selamat datang',
            login: {
                btn: 'Masuk',
                email: 'surel',
                email_hint: 'cth: user@user.com',
                password: 'kata sandi',
                noaccount: 'tidak punya akun? ',
                create: 'buat akun',
                pass_hint: 'panjang',
                pass_requirement: 'min 8 karakter',
                email_invalid: 'Email tidak valid.',
                required: "diperlukan.",

                sign_with: "Masuk dengan Google"
            },
            create: {
                btn: 'Buat Akun',
                sign_with: 'Daftar dengan Google',
                repassword: 'konfirmasi sandi',
            }
        },
        'en-US': {
            app: {
                home: "Home",
                about: "About",
                back: "back",
                or: 'OR'
            },
            home: {
                headline: "Our actions now",
                headline1: "ensure future happiness",
                sub: "Schedule your medical check-up now",
                contact: "Contact us",
                benefit: {
                    title: "Complete health care",
                    body: "Served by professionals and well-equipped for comprehensive health solutions",
                    poin1: "Served by many specialists who are experts in various health fields",
                    poin2: "Equipped with a laboratory for in-depth analysis of a disease",
                    poin3: "Radiology for imaging human organs to look for anomalies in the body"
                }
            },
            welcome: 'Welcome',
            login: {
                btn: 'Login',
                email: 'email',
                email_hint: "exp: user{'@'}user.com",
                password: 'password',

                noaccount: 'dont have an account? ',
                create: 'create',
                pass_hint: 'length',
                pass_requirement: 'min 8 character',
                email_invalid: 'Invalid e-mail.',
                required: "required.",

                sign_with: "Sign in with Google"
            },
            create: {
                btn: 'Create account',
                sign_with: 'Sign up with Google',
                repassword: 'confirm password',
            }
        },
        'ja-JP': {
            app: {
                home: "ホーム",
                about: "について",
                back: "戻る",
                or: 'または'
            },
            home: {
                headline: "私たちの行動",
                headline1: '将来の幸福を保証する',
                sub: "今すぐ健康診断を予約する",
                contact: "お問い合わせ",
                benefit: {
                    title: "完全な健康管理",
                    body: "専門家によるサービスと、包括的な健康ソリューションのための充実した設備",
                    poin1: "様々な健康分野に精通した多くのスペシャリストによるサービス",
                    poin2: "病気の詳細な分析のための研究室を備える",
                    poin3: "人体の臓器を画像化し、体内の異常を探すための放射線学"
                }
            },
            welcome: 'こんにちは',
            login: {
                btn: 'ログイン',
                email: 'メール',
                email_hint: '例) user@user.com',
                password: 'パスワード',
                noaccount: 'アカウントをお持ちでない方。',
                create: '会員登録',
                pass_hint: '長さ',
                pass_requirement: '8文字以上',
                email_invalid: '無効な電子メールです。',
                required: "必要。",

                sign_with: "Googleでログイン"
            },
            create: {
                btn: '会員登録',
                sign_with: 'Googleで登録',
                repassword: 'パスワード再入力',
            }
        }
    }
}))