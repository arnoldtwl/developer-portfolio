// model.js
import * as tf from "@tensorflow/tfjs";

// Define a simple linear regression model
export const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 10, inputShape: [1], activation: "relu" }));
  model.add(tf.layers.dense({ units: 10, activation: "relu" }));
  model.add(tf.layers.dense({ units: 1 }));
  model.compile({ loss: "meanSquaredError", optimizer: tf.train.adam(0.01) }); // Lower/increase learning rate here, for better results
  return model;
};

// Train the model with a simple dataset
export const trainModel = async (model) => {
  // Create simple dataset
  const xs = tf.tensor2d([4, 5, 6, 7, 8, 9], [6, 1]);
  const ys = tf.tensor2d([2, 4, 5, 6, 7, 9], [6, 1]);

  // Normalize the data
  const xMean = xs.mean();
  const xStd = xs.sub(xMean).square().mean().sqrt();
  const NormalizeXs = xs.sub(xMean).div(xStd);

  // Train the model
  await model.fit(NormalizeXs, ys, { epochs: 1000 }); // lower/Increase epochs here, for better results
};

// Make a prediction with the model
export const predict = (model, input) => {
  const xMean = 6; // Approximate mean of the input data
  const xStd = 1.707825127659933; // Approximate standard deviation of the input dataset
  const normalizedInput = (input - xMean) / xStd;
  const tensor = tf.tensor2d([normalizedInput], [1, 1]);
  const prediction = model.predict(tensor);
  return prediction.dataSync()[0];
};
