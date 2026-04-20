# Phase2 差し込みポイント（TODO）

> 既存Phase1コードへ挿入する想定の TODO 一覧。現時点では実装先が未確定のため仮置き。

- [ ] index に「おすすめコミュニティ」セクションを追加する
- [ ] explore に `communities` カテゴリを追加する
- [ ] artist詳細ページにコミュニティ導線を追加する
- [ ] space詳細ページにコミュニティ導線を追加する
- [ ] exhibition詳細ページに関連コミュニティ導線を追加する
- [ ] event詳細ページに主催コミュニティ導線を追加する
- [ ] mypage に参加中コミュニティ導線を追加する

## 衝突懸念（Phase1）

- relation基盤との統合方式は未確定のため、Subjectへの寄せ方は仮置き。
- Eventを既存拡張するか新モデル化するかは未確定のため、`src/models/community.ts` の Event は独立案。
- 本体会員とcommunity annual重複時の優先表示は未確定。
