
## usersテーブル
|column|Type|Option|
|------|----|------|
|name|string|null:false,unique: true|
|e_mail|string|null: false,unique: true|
|password|string|null: false,unique: true|
### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

## messagesテーブル
|column|Type|Option|
|------|----|------|
|user_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|
|text|text|null: false|
|image|string|
### Association
- belong_to :user
- belong_to :group

## groupsテーブル
|column|Type|Option|
|------|----|------|
|name|string|null:false|
### Association
- has_many :messages
- has_many :users, through: :group_user
- has_many :group_user

### groups_usersテーブル
|column|Type|Option|
|------|----|------|
|user_id|integer|null:false, foreign_key: true|
|group_id|integer|null:false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

