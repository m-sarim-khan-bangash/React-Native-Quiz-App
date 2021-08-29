import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const QuizSection = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'SASS stands for __________',
      options: [
        'Syntactically Awesome Style Sheets',
        'Syntactically Amazing Style Sheets',
        'Systematically Awesome Style Sheets',
      ],
      correctAns: 'Syntactically Awesome Style Sheets',
    },
    {
      question: 'Bootstrap is a library of __________',
      options: ['HTML', 'CSS', 'JS'],
      correctAns: 'CSS',
    },
    {
      question: 'JSX Stands for_________',
      options: ['JavaScript X', 'JavaScript', 'JavaScript XML'],
      correctAns: 'JavaScript XML',
    },
    {
      question: 'React Native use for developing_________',
      options: ['Andoid Apps', 'IOS Apps', 'Both'],
      correctAns: 'Both',
    },
    {
      question: 'Git is a_________',
      options: [
        'Version Distributing System',
        'Version Controlling System',
        'None',
      ],
      correctAns: 'Version Controlling System',
    },
    {
      question: 'Typescript is __________ of JavaScript',
      options: ['Superset', 'Library', 'Framework'],
      correctAns: 'Superset',
    },
  ]);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  const checkAnswer = () => {
    let correctValue = questions[ind].correctAns;
    if (selectedValue === correctValue) {
      setScore(score + 1);
    }
    if (questions.length === ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  };
  return (
    <>
      {!showResult ? (
        <Image
          style={{
            width: 150,
            height: 150,
            marginBottom: 20,
          }}
          source={{
            uri: 'https://o.remove.bg/downloads/64ecd4f5-999f-405f-a168-e9b5fa219464/pngtree-quiz-sign-icon-questions-png-image_3129181-removebg-preview.png',
          }}
        />
      ) : null}

      {/* Show Result */}
      {showResult ? (
        <>
          <Image
            style={{
              width: 190,
              height: 150,
              marginBottom: 20,
              // borderRadius: 10,
            }}
            source={{
              uri: 'https://o.remove.bg/downloads/8ea4c76b-c70c-4ee1-89bc-04fc63121911/png-transparent-white-paper-illustration-software-testing-computer-icons-computer-software-results-miscellaneous-angle-text-removebg-preview.png',
            }}
          />
          <View style={styles.showResultcontainer}>
            <Text style={styles.resultHeading}>Result</Text>
            <Text style={styles.percentage}>
              {((score / questions.length) * 100).toFixed(2)}%
            </Text>
            <Text style={styles.grade}>
              {' '}
              {(score / questions.length) * 100 < 60
                ? 'You are Fail, Better Luck NextTime 😞'
                : 'Congratulations! You are Pass 🥳'}
            </Text>
          </View>
        </>
      ) : null}
      {/* Show Result End*/}

      {/* Quiz Question Box */}
      {!showResult ? (
        <View style={styles.quizBox}>
          <Text style={styles.questionNo}>
            Question Number{' '}
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#27ae60'}}>
              {ind + 1}
            </Text>{' '}
            of {questions.length}{' '}
          </Text>
          <Text style={styles.question}>{questions[ind].question}</Text>
        </View>
      ) : null}
      {/* Quiz Question Box End */}

      {/* Quiz Question's Option Box */}
      {!showResult ? (
        <View style={styles.quizBoxOption}>
          {questions[ind].options.map((v, i) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  padding: 8,
                  marginBottom: 8,
                  borderRadius: 5,
                }}
                key={i}
                onPress={() => setSelectedValue(v)}>
                <Text style={{fontSize: 14}}>{v}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
      {/* Quiz Question's Option Box End */}

      {/* Next Btn */}
      {!showResult ? (
        <View>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => checkAnswer()}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 17}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {/* Next Btn End */}
    </>
  );
};

const styles = StyleSheet.create({
  quizBox: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderRadius: 2,
    width: 300,
  },
  questionNo: {
    color: '#fff',
    fontSize: 17,
  },
  question: {
    color: '#fff',
    fontSize: 19,
    paddingTop: 15,
  },
  quizBoxOption: {
    width: 300,
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#2c3e50',
    padding: 20,
    borderRadius: 2,
  },
  nextBtn: {
    backgroundColor: '#2980b9',
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginTop: 10,
    width: 300,
    borderRadius: 2,
  },
  showResultcontainer: {
    backgroundColor: '#16a085',
    width: 300,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  resultHeading: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 1,
  },
  percentage: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
  },
  grade: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 26,
  },
});
export default QuizSection;
