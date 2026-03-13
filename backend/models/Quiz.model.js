import mongoose from "mongoose";
const quizzSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user ID"],
    },
    documentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: [true, "Please provide a document ID"],
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    questions: [
      {
        question: {
          type: Srting,
          required: true,
        },
        options: {
          type: [String],
          required: true,
          validate: [
            (array) => array.length === 4,
            "Muust have exactly 4 options",
          ],
        },
        correctAnswer: {
          type: String,
          required: true,
        },
        difficulty: {
          type: String,
          enum: ["easy", "medium", "hard"],
          default: "medium",
        },
        userAnswer: [
          {
            questionIndex: {
              type: Number,
              required: true,
            },
            selectedAnswer: {
              type: String,
              required: true,
            },
            isCorrect: {
              type: Boolean,
              required: true,
            },
            answeredAt: {
              type: Date,
              default: Date.now,
            },
          },
        ],
      },
    ],
    totalQuestions: {
      type: Number,
      required: true,
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
//Index for faster queries

quizzSchema.index({ userId: 1, documentId: 1 });

const Quizz = mongoose.model("Quizz", quizzSchema);

export default Quizz;
