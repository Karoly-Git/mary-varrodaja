import React from "react"
import { gyik, reviews, hirek } from "../data/pages_data"

import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import { GoQuestion as QuestionIcon } from "react-icons/go";
import { HiOutlineOfficeBuilding as ContactIcon } from "react-icons/hi";
import { FaRegCommentDots as CommentIcon } from "react-icons/fa";
import Contacts from "./Contacts";

export default function Info() {

    function indexes(num, data) {
        const length = data.length;
        let indexList = [];
        while (indexList.length < num) {
            let randIndex = Math.trunc(Math.random() * length);
            if (!indexList.includes(randIndex)) {
                indexList.push(randIndex)
            }
        }
        return indexList;
    }

    return (
        <div className="info">
            <div className=" box contact">
                <ContactIcon className="icon" />
                <h3 className="box-title">Elérhetőségek</h3>
                <div className="devider"></div>

                <Contacts />
            </div>

            <div className="box">
                <InfoIcon className="icon" />
                <h3 className="box-title">Hírek</h3>
                <div className="devider"></div>
                <ul>
                    {hirek.map((hir, hirIndex) =>
                        hir.isActive &&
                        <li key={"hir" + hirIndex}>
                            <h4>{hir.title}</h4>
                            <p>{hir.text}</p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="box">
                <QuestionIcon className="icon" />
                <h3 className="box-title">Gyakori kérdések</h3>
                <div className="devider"></div>
                <ul>
                    {indexes(2, gyik).map((element, index) =>
                        <li key={"gyik" + index}>
                            <h4>{gyik[element].question}</h4>
                            <p>{gyik[element].answer}</p>
                        </li>
                    )}
                </ul>
            </div>

            <div className="box reviews">
                <CommentIcon className="icon" />
                <h3 className="box-title">Vélemények</h3>
                <div className="devider"></div>
                <ul>
                    {indexes(2, reviews).map((element, index) =>
                        <li key={"reviews" + index}>
                            <h4>{reviews[element].name}</h4>
                            <p>" {reviews[element].short_comment} "</p>
                            {false && <p className="date">{reviews[element].timestamp.split("T")[0]}</p>}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
