FIRST: initial
====================
1. git checkout
2. cd folder kerja
3. touch .gitignore, isi node_modules
4. touch app.js
5. mkdir views controllers

SECOND: install packages
====================
1. npm init -y
2. npm i sequelize
3. npm i pg
4. npm i -D sequelize-cli
5. npx sequelize-cli init (bikin folder config, models, migrations, seeders)
6. npm i express ejs

THIRD: buat database
====================
1. Edit config.json
2. npx sequelize-cli db:create

FORTH: buat model & migration
====================
1. npx sequelize-cli model:generate --name <nama_model> --attributes
2. npx sequelize-cli migration:generate --name <nama_migration> (buat FK)
contoh untuk buat migration FK:

up:
return queryInterface.addColumn("Books", "AuthorId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Authors"
        },
        key: "id"
      }
    })

down:
return queryInterface.removeColumn("Books", "AuthorId")

3. sesuaikan static method associate
3. npx sequelize-cli db:migrate

FIFTH: seeding
====================
1. npx sequelize-cli seed:generate --name <nama_seed>
contoh seeding:

up:
return queryInterface.bulkInsert("Authors", dataInsert, {})

down:
return queryInterface.bulkDelete("Authors", null, {})

2. npx sequelize-cli db:seed:all

IF WEIRD AFTER SEEDING:
====================
1. npx sequelize-cli db:migrate:undo:all
2. npx sequelize-cli db:seed:undo:all
3. npx sequelize-cli db:migrate
4. npx sequelize-cli db:seed:all

SIXTH: routing / app.js
====================
1. app.set('view engine', 'ejs')
2. app.use(express.urlencoded({ extended: true }))
3. buat controller, export, require model
4. require controller pada app.js
5. buat berbagai route sesuai soal

SEVENTH: kerjakan tiap endpoint / tergantung release
====================
- apabila page home:
  1. buat ejs home
  2. sambung route
  3. jalankan!

- apabila "read":
  1. buat ejs read
  2. buat controller modelList.findAll, tambah include jika diperlukan
  3. sambungkan route
  4. jalankan!

- apabila "create":
  1. buat ejs form
  2. jika perlu baca options, perlu loop, di controller perlu findAll untuk options
  3. jika tidak perlu baca options, di controller langsung res.render
  4. buat controller addPost, destructure req.body, simpan di value, Model.create
  5. res.redirect
  6. sambungkan route
  7. jalankan!
  8. buat hooks jika perlu
  9. buat validate jika perlu

- apabila "update":
  *ada 2 tipe, untuk update keseluruhan (perlu form) dan update sebagian (tidak perlu form)
  kalau update keseluruhan:
  1. buat ejs form
  2. jika perlu populate, di controller harus findByPk
  3. jika perlu baca options, perlu loop, di controller perlu findAll untuk options
  4. buat controller editPost, destructure req.body, simpan di value, Model.update
  5. res.redirect
  6. sambungkan route
  7. jalankan!

- apabila "delete":
  1. buat controller delete, Book.destroy({ where: { id: req.params.id } })
  2. res.redirect
  3. sambungkan route
  4. jalankan!

HELPER:
======================
  1. buat folder helpers
  2. buat nama file helper sesuai dengan nama functionnya
  3. export function
  4. require helper di controller yang membutuhkan
  5. tempatkan hasil require di method yang membutuhkan
  6. gunakan helper di ejs-nya

SEARCH:
=========================
  1. buat form search di ejs
  2. buat variable where
  3. buat kondisi apabila ada req.query.search



