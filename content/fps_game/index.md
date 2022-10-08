---
title: 'FPSゲームを作ろう'
description: 'UnrealEngine5を使ってFPSゲームを作ります。'
thumbPath: '/images/fps_game/thumb.png'
date: '20221008'
tags: ['unreal engine']
---

# FPS ゲームを作ろう

どんなものを作るか

[https://youtu.be/s2za3yfE-74](https://youtu.be/s2za3yfE-74)

初期プロジェクト

[https://github.com/Riti0208/ue-fps-tutorial](https://github.com/Riti0208/ue-fps-tutorial)

## 作る手順

1. プレイヤーの作成
2. プレイヤーの移動処理
3. 銃の射撃処理
4. 的の移動処理

### 1.プレイヤーの作成

#### 1.プレイヤーキャラクター BP の作成

コンテンツドロワーを開き`Blueprints`ディレクトリに移動

<img src="/images/fps_game/1-1.png" width="600px">

ディレクトリ内右クリック後ブループリントクラスを選択

<img src="/images/fps_game/1-2.png" width="600px">

親クラスにはキャラクターを選択

<img src="/images/fps_game/1-3.png" width="600px">

作成したキャラクター BP の名前を`FPSCharacter`に変更

<img src="/images/fps_game/1-4.png" width="600px">

#### 2.ゲームモード BP の作成

プレイヤーキャラクター BP の作成と同じ要領で<br>`Game Mode Base`を親にしてブループリントを作成

<img src="/images/fps_game/1-5.png" width="600px">

作成したゲームモード BP の名前を`MainGameMode`に変更

<img src="/images/fps_game/1-6.png" width="600px">

#### 3.プレイヤーコントローラー BP の作成

プレイヤーキャラクター BP の作成と同じ要領で<br>`Player Controller`を親にしてブループリントを作成

<img src="/images/fps_game/1-7.png" width="600px">

作成したプレイヤーコントローラー BP の名前を`FPSController`に変更

<img src="/images/fps_game/1-8.png" width="600px">

#### 4.プレイヤーの見た目の設定

Blueprints ディレクトリから`FPSCharacter`をダブルクリックして開く

<img src="/images/fps_game/1-15.png" width="600px">

`FPSCharacter`を開いたら左上の追加ボタンを押下し、カメラを選択する

<img src="/images/fps_game/1-16.png" width="600px">

コンポーネント欄にカメラが追加できたら選択し<br>詳細欄のパラメータを画像の赤枠と同じ値にする。

<img src="/images/fps_game/1-17.png" width="600px">

コンポーネント欄のカメラを選択した状態で左上の追加ボタンを押下し、<br>`Static Mesh`を選択する

<img src="/images/fps_game/1-18.png" width="600px">

コンポーネント欄の`Static Mesh`がカメラの子オブジェクトになっていることを確認後、選択し<br>詳細欄のパラメータを画像の赤枠と同じ値にする。

<img src="/images/fps_game/1-19.png" width="600px">

コンポーネント欄の`Static Mesh`を選択した状態で左上の追加ボタンを押下し、<br>`Scene`を選択する

<img src="/images/fps_game/1-20.png" width="600px">

コンポーネント欄の`Scene`が`Static Mesh`の子オブジェクトになっていることを確認後、選択し<br>詳細欄のパラメータを画像の赤枠と同じ値にする。<br>最後に左上のコンパイルボタンを押下する

<img src="/images/fps_game/1-21.png" width="600px">

#### 5.ゲームモードの設定と実行

ウィンドウメニューからワールドセッティングを開く

<img src="/images/fps_game/1-9.png" width="600px">

`ゲームモードオーバーライド`の項目を<br>`2.ゲームモード BP の作成`で作成した`MainGameMode`に設定

<img src="/images/fps_game/1-10.png" width="600px">

`Default Pawn Class` の項目を<br>`1.プレイヤーキャラクター BP の作成`で作成した `FPSCharacter`に設定

<img src="/images/fps_game/1-11.png" width="600px">

`Player Controller Class` の項目を<br>`3.プレイヤーコントローラー BP の作成`で作成した`FPSController`に設定

<img src="/images/fps_game/1-12.png" width="600px">

実行

<img src="/images/fps_game/1-13.png" width="600px">
<br>
<img src="/images/fps_game/1-22.png" width="600px">

配布プロジェクト内で既に配置しておいた<br>`PlayerStart`から画像の矢印の方向に向けた視点になっていれば OK

<img src="/images/fps_game/1-14.png" width="600px">

### 2.プレイヤーの移動処理

#### 1.キー設定の確認

`編集メニュー`から`プロジェクト設定`を開く

<img src="/images/fps_game/2-6.png" width="600px">

`プロジェクト設定`を開いたら`インプット`の項目を開く

<img src="/images/fps_game/2-7.png" width="600px">

プロジェクトに設定されているキー設定を確認する。<br>好きなキー設定に変更しても OK

<img src="/images/fps_game/2-8.png" width="600px">

#### 2.視線を動かせるようにする

`FPSCharacter`を開きイベントグラフをクリックし遷移する

<img src="/images/fps_game/2-1.png" width="600px">

イベントグラフを右クリックし画像のようにノードを設定する<br>設定後、コンパイルボタンを押下する

<img src="/images/fps_game/2-2.png" width="600px">

ゲームを実行後、マウスを使って視線を操作できれば OK

<img src="/images/fps_game/2-3.gif" width="600px">

#### 3.移動できるようにする

画像のようにノードを設定する<br>設定後、コンパイルボタンを押下する

<img src="/images/fps_game/2-4.png" width="600px">

ゲームを実行後、WASD で移動、スペースでジャンプできれば OK

<img src="/images/fps_game/2-5.gif" width="600px">

### 3.銃の射撃処理

#### 1.エフェクトが出るようにする

`FPSCharacter`を開き画像のようにノードを設定する<br>設定後、コンパイルボタンを押下する

<img src="/images/fps_game/3-1.png" width="600px">

ゲームを実行後、マウスの左クリック時にエフェクトが出れば OK

<img src="/images/fps_game/3-2.gif" width="600px">

#### 2.音が出るようにする

画像のように`1.エフェクトが出るようにする`のプログラムから<br>繋げる形でノードを設定する<br>設定後、コンパイルボタンを押下する

<img src="/images/fps_game/3-3.png" width="600px">

ゲームを実行後、マウスの左クリック時に音が出れば OK

<img src="/images/fps_game/3-2.gif" width="600px">

#### 3.反動の処理を追加する

マイブループリントの欄の変数にて＋ボタンを押下、変数を追加

<img src="/images/fps_game/3-4.png" width="600px">

追加した変数の名前を`PitchReaction`に変更、<br>現在`Boolean`の型をクリックして`Float`に変更

<img src="/images/fps_game/3-5.png" width="600px">

同じように変数`YawReaction`を追加

<img src="/images/fps_game/3-6.png" width="600px">

追加した変数をイベントグラフまでドラッグし画像のように<br>`2.音が出るようにする`のプログラムから繋げる形でノードを設定する

<img src="/images/fps_game/3-7.png" width="600px">

画像のように`タイムライン`ノードを追加する

<img src="/images/fps_game/3-8.png" width="600px">

配置した`タイムライン`ノードをダブルクリックして設定画面を開く

<img src="/images/fps_game/3-9.png" width="600px">

設定画面が開けたら左上の`トラック`ボタンを押下し、`フロートトラック`を選択する

<img src="/images/fps_game/3-10.png" width="600px">

`トラック`が追加できたら、`トラック`内で右クリック、`CurveFloat_0にキーを追加`を選択

<img src="/images/fps_game/3-11.png" width="600px">

追加したキーをクリックし、左上の時間と値を 0 に設定

<img src="/images/fps_game/3-12.png" width="600px">

同じように`トラック`を追加し、左上の時間と値を 0.05 と 1 に設定

<img src="/images/fps_game/3-13.png" width="600px">

`トラック`左上の最大化ボタンを押下して画像と同じようなカーブになっていれば OK<br>× ボタンを押下してイベントグラフに戻る

<img src="/images/fps_game/3-14.png" width="600px">

画像のように変数の値を設定したプログラムから繋げる形でノードを設定する<br>設定後、コンパイルボタンを押下する

<img src="/images/fps_game/3-15.png" width="600px">

ゲームを実行後、マウスクリック時、反動で視点が動けば OK

<img src="/images/fps_game/3-16.gif" width="600px">

#### 4.照準を表示する

`FPSController`を開く

<img src="/images/fps_game/3-17.png" width="600px">

デフォルトで設定されている`Begin Play`から繋げる形でノードを設定する

<img src="/images/fps_game/3-18.png" width="600px">

ゲームを実行後、照準が表示されていれば OK

<img src="/images/fps_game/3-19.png" width="600px">

#### 5.当たり判定を追加する

`FPSCharacter`を開く

<img src="/images/fps_game/3-20.png" width="600px">

`PlaySound2D`の出力を`Alt + クリック`で切る

<img src="/images/fps_game/3-21.png" width="600px">

`PlaySound2D`と`SetPatchReaction`の間に`Sequence`ノードを挟む

<img src="/images/fps_game/3-22.png" width="600px">

`Sequence`ノードの２つめの出力先から繋がる形で<br>画像のようにノードを設定する<br>`LineTraceBuChannel`の`DrawDebugType`を`ForDuration`に変更後、コンパイルボタンを押下する

<img src="/images/fps_game/3-23.png" width="600px">

ゲームを実行後、マウスクリック時に線が表示されオブジェクトとの<br>当たり判定が発生していれば OK

<img src="/images/fps_game/3-24.gif" width="600px">

### 4.的の移動処理

#### 1.ゲーム実行時に移動するようにする

`TargetActor`を開く

<img src="/images/fps_game/3-25.png" width="600px">

イベントグラフを右クリックしてカスタムイベントを作成する

<img src="/images/fps_game/3-26.png" width="600px">

作成したカスタムイベントの名前を`RandomMove`に変更する

<img src="/images/fps_game/3-27.png" width="600px">

カスタムイベント`RandomMove`から繋げる形で画像のようにノードを設定する

<img src="/images/fps_game/3-28.png" width="600px">

デフォルトで設定されている`Begin Play`から繋げる形で`RandomMove`を設定する<br>設定後、コンパイルボタンを押下する

<img src="/images/fps_game/3-29.png" width="600px">

ゲームを実行するたびに的の位置がランダムに変化すれば OK

<img src="/images/fps_game/3-30.gif" width="600px">

#### 2.弾に当たった場合移動するようにする

Blueprints フォルダで右クリックをし、`ブループリントインターフェース`を追加する

<img src="/images/fps_game/3-31.png" width="600px">

追加した`ブループリントインターフェース`の名前を`BulletHitInterface`に変更する

<img src="/images/fps_game/3-32.png" width="600px">

`BulletHitInterface`を開いて、関数名を`Hit`に変更する<br>変更後コンパイルボタンを押下する

<img src="/images/fps_game/3-33.png" width="600px">

`TargetActor`を開く

<img src="/images/fps_game/3-34.png" width="600px">

`クラス設定`押下、右側に詳細欄が出ることを確認する

<img src="/images/fps_game/3-35.png" width="600px">

詳細欄から追加ボタンを押下して、`BulletHitInterface`を選択する

<img src="/images/fps_game/3-36.png" width="600px">

`BulletHitInterface`追加後、マイブループリント欄インターフェース下に<br> Hit が追加されているので、右クリック後、イベントを実装を選択

<img src="/images/fps_game/3-37.png" width="600px">

選択後、Hit イベントがイベントグラフに追加される

<img src="/images/fps_game/3-38.png" width="600px">

Hit イベントから繋がる形で作成した`RandomMove`イベントを設定する

<img src="/images/fps_game/3-39.png" width="600px">

`FPSCharacter`を開く

<img src="/images/fps_game/3-40.png" width="600px">

当たり判定の処理から繋がる形で画像のようにノードを設定する<br>`LineTraceBuChannel`の`DrawDebugType`を`none`に変更する<br>
設定後、コンパイルボタンを押下する

<img src="/images/fps_game/3-41.png" width="600px">

ゲームを実行後、弾に当たった的が動けば OK

<img src="/images/fps_game/3-42.gif" width="600px">
