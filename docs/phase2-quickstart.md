# Phase2 MVP 触り方（Quickstart）

## 1) まず開くURL

- `/` : 導線ハブ（今回追加）
- `/communities` : コミュニティ一覧

## 2) サンプルで試す（artist: `aoi-kanda`）

- `/communities/aoi-kanda`
- `/communities/aoi-kanda/posts/post_001`（public）
- `/communities/aoi-kanda/posts/post_002`（members_only + annual）
- `/communities/aoi-kanda/events/event_001`（public）
- `/communities/aoi-kanda/events/event_002`（members_only + annual）
- `/communities/aoi-kanda/join`
- `/communities/aoi-kanda/pass`

## 3) 管理画面（仮置き）

- `/manage/aoi-kanda`
- 現状は `user_owner` を擬似ログインユーザーとして判定しているため、`aoi-kanda` はアクセス可

## 補足

- 課金処理・購入管理は未実装（MVP対象外）
- 権限は最小実装（public/members_only, free/annual, SubjectRole）
