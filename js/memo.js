const memoForm = document.getElementById("memo-form");
const memoInput = document.querySelector("#memo-form input");
const memoList = document.getElementById("memo-list");

const MEMOS_KEY = "memos";

let meMos = [];

function saveMemos() {
  localStorage.setItem(MEMOS_KEY, JSON.stringify(meMos));
}

function deleteMemo(event) {
  const li = event.target.parentElement;
  li.remove();
  meMos = meMos.filter((memo) => memo.id !== parseInt(li.id));
  saveMemos();
}

function paintMemo(newMemo) {
  const li = document.createElement("li");
  li.id = newMemo.id;
  const span = document.createElement("span");
  span.innerText = newMemo.text;
  const button = document.createElement("button");
  button.innerText = "✅";
  button.addEventListener("click", deleteMemo);
  li.appendChild(span);
  li.appendChild(button);
  memoList.appendChild(li);
}

function handleMemoSubmit(event) {
  event.preventDefault();
  const newMemo = memoInput.value;
  memoInput.value = "";
  const newMemoObj = {
    text: newMemo,
    id: Date.now(),
  };
  meMos.push(newMemoObj);
  paintMemo(newMemoObj);
  saveMemos();
}

memoForm.addEventListener("submit", handleMemoSubmit);

const savedMemos = localStorage.getItem(MEMOS_KEY);

if (savedMemos !== null) {
  const parsedMemos = JSON.parse(savedMemos);
  meMos = parsedMemos;
  parsedMemos.forEach(paintMemo);
}
