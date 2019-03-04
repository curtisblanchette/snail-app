export interface AverageTime {
  averageSuccessDays: number;
  averageFailureDays: number;
}

export interface SuccessRate {
  success: number;
  failure: number;
}

export interface AverageResponse {
  successRate: SuccessRate;
  averageTotalDistanceClimbed: number;
  averageTime: AverageTime;
}
