import { all } from "redux-saga/effects";
import { getDataActionWatcher } from "./nowShowing";

export default function* root() {
	yield all([ getDataActionWatcher() ]);
}