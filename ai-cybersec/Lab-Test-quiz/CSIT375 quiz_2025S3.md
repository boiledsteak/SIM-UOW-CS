### **Question 1**
**If a model achieves high accuracy, this model must be adversarially robust.**  
- [ ] True  
- [x] False ✅  
> A model with high accuracy can still be fooled by adversarial examples (e.g., PGD on CIFAR10).

---

### **Question 2**
**Classification tasks predict the value of a real-number variable.**  
- [ ] True  
- [x] False ✅  
> Regression predicts real-number values, not classification.

---

### **Question 3**
**Which of the statements about universal adversarial perturbations (UAPs) is (are) true?**  
- [ ] a. None of the other options  
- [x] b. UAPs can be constrained by p-norm ✅  
- [ ] c. The goal of UAPs is to fool multiple models simultaneously  
- [x] d. UAPs can be used for both targeted and untargeted attacks ✅  
- [x] e. UAPs can be generated to fool models in different areas, e.g., image and speech recognition ✅  
> Correct answers: b, d, e

---

### **Question 4**
**Which of the following statements about training machine learning models is (are) true?**  
- [x] a. To complete one training iteration, the model parameters are updated once ✅  
- [x] b. Before updating model parameters, gradients should be set to zero ✅  
- [x] c. One training epoch means visiting each training sample once ✅  
- [ ] d. We can tune model parameters on test data during training  
- [ ] e. Training data and test data are normally identical  
> Correct answers: a, b, c

---

### **Question 5**
**Which of the following statements is (are) true?**  
- [ ] a. Only unlabelled examples are used to train a spam classifier  
- [ ] b. None of the other options  
- [x] c. Accuracy can be misleading ✅  
- [x] d. PyTorch Tensors can run on GPUs, Numpy arrays cannot ✅  
- [ ] e. We want to maximize the cost function during training  
> Correct answers: c, d

---

### **Question 6**
**What does the following algorithm do?**  
```text
1. δ ← ε ⋅ sign(∇ₓ J(θ, x, y))  
2. x′ ← x - δ  
3. x′ ← clip(x′, 0, 1)
```  
- [x] a. None of the other options ✅  
- [ ] b. Generate a targeted adversarial example  
- [ ] c. Optimize model parameters to minimize cost  
- [ ] d. Generate an untargeted adversarial example  
- [ ] e. Optimize model parameters to maximize cost  
> This algorithm strengthens the model’s confidence in the correct label, not fooling it.

---

### **Question 7**
**The gradient descent algorithm can only be used to train image classification models.**  
- [ ] True  
- [x] False ✅  
> Gradient descent is used across many domains, not just image classification.

---

### **Question 8**
**All adversarial perturbations are constrained by p-norm.**  
- [ ] True  
- [x] False ✅  
> Unrestricted adversarial examples are not constrained by p-norm.

---

### **Question 9**
**In spam classification, which of the following statements is (are) true?**  
- [ ] a. False negative if ham is classified as spam  
- [x] b. False positive if ham is classified as spam ✅  
- [ ] c. None of the other options  
- [ ] d. False positive if spam is classified as ham  
- [x] e. False negative if spam is classified as ham ✅  
> Correct answers: b, e

---

### **Question 10**
**PGD is a stronger attack than FGSM because PGD generates attacks in multiple steps.**  
- [x] True ✅  
- [ ] False  
> PGD’s iterative nature makes it more powerful than FGSM.


### **Question 11**  
**Which of the following statements about deep neural network (DNN) watermarking is (are) true?**  
- [ ] a. All watermarking techniques are based on the same idea as backdoor attacks.  
- [ ] b. Entangled Watermarks require white-box access to detect IP infringement.  
- [x] c. None of the other options ✅  
- [ ] d. Detection thresholds require training multiple unwatermarked models.  
- [ ] e. Adversarially trained models will be flagged by Entangled Watermarks.  
> ✅ Explanation: IP infringement can be detected via black-box access, and none of the other statements are fully correct.

---

### **Question 12**  
**Which of the following statements about DNN fingerprinting is (are) true?**  
- [x] a. IPGuard and MetaFinger only require black-box access ✅  
- [ ] b. MetaFinger uses triple loss to align negative models.  
- [x] c. DNN fingerprinting does not change model parameters ✅  
- [ ] d. Every negative model in MetaFinger is trained from scratch.  
- [ ] e. None of the other options.  
> ✅ Explanation: Fingerprinting methods like IPGuard and MetaFinger work without modifying model parameters and require only black-box access.

---

### **Question 13**  
**Which of the following statements about model stealing is (are) true?**  
- [ ] a. Adversaries must know the target model architecture.  
- [ ] b. MixMatch only requires unlabeled data.  
- [x] c. Labeling a dataset with the target model and training a knockoff is a valid strategy ✅  
- [ ] d. All data must be within the task domain.  
- [ ] e. None of the other options.  
> ✅ Explanation: Using the target model to label data and train a knockoff is a feasible model stealing strategy.

---

### **Question 14**  
**Which statements about adversarial examples vs. backdoor attacks are true?**  
- [x] a. Both can be used for untargeted attacks ✅  
- [x] b. Backdoor attacks occur during training; adversarial examples during inference ✅  
- [ ] c. Adversarial perturbations are imperceptible; triggers are perceptible.  
- [ ] d. None of the other options.  
- [ ] e. Both require white-box access.  
> ✅ Explanation: Backdoor attacks are injected during training, while adversarial examples are crafted at inference time.

---

### **Question 15**  
**It is possible to insert backdoors without modifying original parameters.**  
- [x] True ✅  
- [ ] False  
> ✅ Explanation: Module backdoor attacks can insert backdoors without changing the model’s parameters.

---

### **Question 16**  
**Which of the following statements about reactive deepfake detection is (are) true?**  
- [ ] a. Human eyes easily spot artifacts.  
- [ ] b. AutoGAN reconstructions are identical to originals.  
- [x] c. None of the other options ✅  
- [ ] d. Perfect classifiers can be trained with ProGAN images.  
- [ ] e. AutoGAN requires prior knowledge of the attacker’s model.  
> ✅ Explanation: None of the listed statements are accurate for reactive deepfake detection.

---

### **Question 17**  
**Which of the following statements about knowledge distillation (KD) is (are) true?**  
- [x] a. None of the other options ✅  
- [ ] b. KD requires labeled data in the transfer set.  
- [ ] c. KD assumes knowledge is stored in parameters.  
- [ ] d. Raising softmax temperature increases confidence.  
- [ ] e. KD requires teacher and student to share architecture.  
> ✅ Explanation: KD transfers knowledge via output distributions, not parameters or architecture.

---

### **Question 18**  
**Which of the following statements about backdoor attacks is (are) true?**  
- [ ] a. Explainable AI techniques always detect triggers.  
- [ ] b. Clean-label attacks still mislabel poisoned data.  
- [ ] c. Sample-agnostic triggers use different triggers per input.  
- [ ] d. Physical-world attacks must consider all transformations.  
- [x] e. None of the other options ✅  
> ✅ Explanation: None of the statements are fully accurate; e.g., BadNets succeed without full physical transformation modeling.

---

### **Question 19**  
**For anti-backdoor learning, we should make the isolation rate as large as possible.**  
- [ ] True  
- [x] False ✅  
> ✅ Explanation: A high isolation rate may harm clean accuracy despite reducing attack success rate.

---

### **Question 20**  
**Sample-specific Backdoor Attack (SSBA) exploits an autoencoder to poison training data. One reason is that the autoencoder makes reconstructed images look similar to input images.**  
- [x] True ✅  
- [ ] False  
> ✅ Explanation: SSBA minimizes the difference between input and output images using autoencoders.

---

### **Question 21**  
**Which of the following statements about proactive deepfake detection is (are) true?**  
- [ ] a. Watermarks naturally exist in deepfakes.  
- [x] b. Imperceptibility is achieved by minimizing differences ✅  
- [x] c. Embedding watermarks in speech helps detect deepfake audio ✅  
- [ ] d. Watermarking requires backdooring the decoder.  
- [ ] e. None of the other options.  
> ✅ Explanation: Watermarks can be embedded proactively in speech and images to aid detection.

---

### **Question 22**  
**Embedding watermarks into generated images is an effective method for detecting deepfake images. This is because watermarked images can fool image classifiers.**  
- [ ] True  
- [x] False ✅  
> ✅ Explanation: Detection works because watermarks can be recovered, not because they fool classifiers.

---

### **Question 23**  
**When using STRIP to detect targeted backdoor attacks, we need to know the target label in advance.**  
- [ ] True  
- [x] False ✅  
> ✅ Explanation: STRIP does not require prior knowledge of triggers or target labels.

---

### **Question 24**  
**Which of the following statements about anti-backdoor learning is (are) true?**  
- [x] b. Learning trigger-label correlation is easier than clean data ✅  
- [x] e. Loss values for isolated data are increased during training ✅  
- [ ] a. None of the other options.  
- [ ] c. Anti-backdoor learning needs target label knowledge.  
- [ ] d. Isolation rate must equal poisoning rate.  
> ✅ Explanation: Anti-backdoor learning assumes trigger-label correlation is easier and uses gradient ascent on isolated data.

---

### **Question 25**  
**Which of the following statements about STRIP is (are) true?**  
- [ ] a. STRIP does not need access to benign data.  
- [ ] b. STRIP removes backdoors from trojaned models.  
- [ ] c. STRIP detects SSBA effectively.  
- [ ] d. FRR is the chance STRIP sees trojaned input as benign.  
- [x] e. None of the other options ✅  
> ✅ Explanation: None of the listed statements correctly describe STRIP’s capabilities or metrics.
