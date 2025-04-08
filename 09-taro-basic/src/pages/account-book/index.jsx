import React, { useState } from "react";
import { View, Picker } from "@tarojs/components";
import {
  AtForm,
  AtInput,
  AtButton,
  AtList,
  AtListItem,
  AtSwipeAction,
} from "taro-ui";
import "./index.scss";

const AccountBook = () => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [records, setRecords] = useState([]);
  const [type, setType] = useState("支出");

  const handleSubmit = () => {
    if (!amount || !date) return;
    const newRecord = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      note,
      date,
    };
    setRecords([newRecord, ...records]);
    setAmount("");
    setNote("");
    setDate("");
  };

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const totalExpense = records
    .filter((record) => record.type === "支出")
    .reduce((sum, record) => sum + record.amount, 0);

  const totalIncome = records
    .filter((record) => record.type === "收入")
    .reduce((sum, record) => sum + record.amount, 0);

  return (
    <View className="account-book">
      <View className="summary">
        <View className="balance">
          余额：{(totalIncome - totalExpense).toFixed(2)}
        </View>
        <View className="details">
          <View>总收入：{totalIncome.toFixed(2)}</View>
          <View>总支出：{totalExpense.toFixed(2)}</View>
        </View>
      </View>

      <AtForm>
        <AtInput
          name="amount"
          title="金额"
          type="number"
          placeholder={`请输入${type}金额`}
          value={amount}
          onChange={setAmount}
        />
        <AtInput
          name="note"
          title="备注"
          type="text"
          placeholder="请输入备注"
          value={note}
          onChange={setNote}
        />
        <Picker mode="date" onChange={(e) => setDate(e.detail.value)}>
          <AtList>
            <AtListItem title="日期" extraText={date || "请选择日期"} />
          </AtList>
        </Picker>

        <View className="type-switch">
          <AtButton
            type={type === "收入" ? "primary" : "secondary"}
            onClick={() => setType("收入")}
            size="small"
          >
            收入
          </AtButton>
          <AtButton
            type={type === "支出" ? "primary" : "secondary"}
            onClick={() => setType("支出")}
            size="small"
          >
            支出
          </AtButton>
        </View>

        <AtButton type="primary" onClick={handleSubmit}>
          添加{type}
        </AtButton>
      </AtForm>

      <View className="records-list">
        <AtList>
          {records.map((record) => (
            <AtSwipeAction
              key={record.id}
              options={[
                {
                  text: "删除",
                  style: {
                    backgroundColor: "#FF4949",
                  },
                },
              ]}
              onClick={() => handleDelete(record.id)}
            >
              <AtListItem
                title={`${record.type}: ￥${record.amount}`}
                note={`${record.note} - ${record.date}`}
              />
            </AtSwipeAction>
          ))}
        </AtList>
      </View>
    </View>
  );
};

export default AccountBook;
