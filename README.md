
## usersテーブル
|column|Type|Option|
|------|----|------|
|user-id|integer|null:false,unique: true|
|e-mail|string|null: false,unique: true|
|password|string|null: false,unique: true|
### Association
- has_many :messages
- has_many :comments
- has_many :groups, thhrough: :groups_users


## messagesテーブル
|column|Type|Option|
|------|----|------|
|user-id|integer|null:false, foreign_key: true|
|group-id|integer|null:false, foreign_key: true|
|message|text|null: false|
|image|string|null: false|
### Association
- belong_to :user
- belong_to :group
- has_many :comments
- has_many : images

## commentsテーブル
|column|Type|Option|
|------|----|------|
|user-id|integer|null:false, foreign_key:true|
|text|text|null: false|
|image|string|null: false|
### Association
- belong_to :user
- belong_to :message
- has_many :images

## groupsテーブル
|column|Type|Option|
|------|----|------|
|user-id|integer|null:false, foreign_key: true|
|group-id|integer|null:false, foreign_key: true|
### Association
- has_many :messages
- has_many :users, through: :groups_users

### groups_usersテーブル
|column|Type|Option|
|------|----|------|
|user-id|integer|null:false, foreign_key: true|
|group-id|integer|null:false, foreign_key: true|
### Association
- has_many :users
- has_many :groups

