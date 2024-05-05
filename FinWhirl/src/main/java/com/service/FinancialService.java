package com.finance.service;

import com.finance.model.FinancialData;

public interface FinancialService {
    double calculateBalance(int userId);
    double calculateProfitLoss(int userId);
    // Other financial calculations
}
