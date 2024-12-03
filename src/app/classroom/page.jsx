"use client";
import { Link, Note } from "@/components/BaseKit";
import ListGroup from "react-bootstrap/ListGroup";

export default function Page() {
  return (
    <div className="mt-5">
      <title>教育機関向け活用例 | easy-three</title>

      <p>
        easy-threeは、
        <Note>3Dグラフィックスの基本を簡単に学ぶためのツール</Note>です。
      </p>

      <p>
        特別な知識がなくても、数行のコードで立方体や球体を表示したり、照明効果を使ったリアルな表現ができます。
      </p>
      <p>
        <Note>
          中学や高校の授業で、プログラミングや3Dデザインを取り入れたいと考えている先生方に最適
        </Note>
        です。
        <br />
        学生たちが楽しみながら学べるよう設計されており、創造力を引き出す手助けをします。
      </p>

      <h2 className="mt-5">授業での準備と活用例</h2>

      <p>
        教員が事前に準備する内容は、非常にシンプルです。例えば、事前に用意したコードを学生に配布し、
        その内容をもとに改変や拡張を行うことで、プログラミングの基礎と創造力を同時に育むことができます。
      </p>

      <p>
        <Note>
          例として、以下のような活動を授業に取り入れることができます。
        </Note>
      </p>

      <ul className="list-disc list-inside">
        <li>簡単な3Dモデル（立方体や球体）の描画と配置</li>
        <li>照明や影を利用したリアルな表現の演習</li>
        <li>色や形を変化させるインタラクティブなプログラムの作成</li>
        <li>複数のオブジェクトを組み合わせたシーンのデザイン</li>
      </ul>

      <p>
        <Note>
          これらの活動を通じて、学生はプログラミングスキルだけでなく、論理的思考力やデザイン感覚を養うことができます。
        </Note>
        また、教員は必要に応じて簡単にスクリプトをカスタマイズできるため、授業の進行に合わせた柔軟な対応が可能です。
      </p>

      <h2 className="mt-5">具体例</h2>
      <p>ここでは、具体的な活用例を紹介します。</p>
      <h3 className="mt-5">授業の前に</h3>
      <ListGroup style={{ maxWidth: "500px" }}>
        <ListGroup.Item action as={Link} href="/classroom/prepare">
          環境を整える
        </ListGroup.Item>
      </ListGroup>

      <h3 className="mt-5">学習内容 (基礎編)</h3>
      <ListGroup style={{ maxWidth: "500px" }}>
        <ListGroup.Item action as={Link} href="/classroom/basics/part1">
          1. 立方体を表示する
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/basics/part2">
          2. 球体と平面を表示する
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/basics/part3">
          3. オブジェクトの色を変える
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/basics/part4">
          4. カメラを動かして視点を変える
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/basics/part5">
          5. 照明を使って陰影を付ける
        </ListGroup.Item>
      </ListGroup>

      <h3 className="mt-5">学習内容 (応用編)</h3>
      <ListGroup style={{ maxWidth: "500px" }}>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part1">
          1. 3Dオブジェクトのアニメーションとインタラクション
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part2">
          2. 複数オブジェクトの同期とシーンデザイン
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part3">
          3. 光と影を利用した高度な表現
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part4">
          4. VRMモデルを用いたアバターの表示
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part5">
          5. VRMモデルの操作とアニメーション
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part6">
          6. 3Dシーンにおけるカメラワークの演習
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part7">
          7. パーティクルシステムによる特殊効果の作成
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part8">
          8. カスタムマテリアルとテクスチャの適用
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part9">
          9. 3Dモデルを利用した物理演算の基礎
        </ListGroup.Item>
        <ListGroup.Item action as={Link} href="/classroom/advanced/part10">
          10. Webカメラを利用したジェスチャー認識との連携
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}