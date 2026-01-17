import java.util.List;

public class StudentAnalyzer {
    /**
     * Phân tích điểm số và trả về số lượng học sinh đạt loại Giỏi.
     * @param scores danh sách điểm số từ 0 đến 10
     * @return số học sinh đạt loại Giỏi (>= 8.0)
     */
    public int countExcellentStudents(List<Double> scores) {
        int count = 0;
        for (Double score : scores) {
            if (score >= 8.0 && score <= 10.0) {
                count++;
            }
        }
        return count;
    }

    /**
     * Tính điểm trung bình hợp lệ.
     * @param scores danh sách điểm
     * @return điểm trung bình của các điểm hợp lệ
     */
    public double calculateValidAverage(List<Double> scores) {
        double sum = 0;
        int validCount = 0;
        for (Double score : scores) {
            if (score >= 0.0 && score <= 10.0) {
                sum += score;
                validCount++;
            }
        }
        return validCount > 0 ? sum / validCount : 0;
    }
}

